const database = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

class EmpresaController {
  static async cadastraEmpresa(req, res) {
    try {
      const novaEmpresa = req.body;

      if (!novaEmpresa.nome || !novaEmpresa.cnpj) {
        return res.status(400).json({ message: "Dados obrigatórios ausentes" });
      }

      const cnpjExistente = await database.empresa.findOne({
        where: { cnpj: novaEmpresa.cnpj },
      });
      if (cnpjExistente) {
        return res.status(400).json({ message: "CNPJ já cadastrado!" });
      }      

      const empresaCriada = await database.empresa.create(novaEmpresa);

      // 🔹 Retorna o cadastro imediatamente
      res.status(201).json(empresaCriada);

    } catch (error) {
      console.error(error);
      if (!res.headersSent) {
        return res.status(500).json({ message: error.message });
      }
    }
  }

  static async checarEmpresa(req, res) {
    const { cnpj } = req.params;
    try {
      const verificaCnpj = await database.empresa.findOne({
        where: { cnpj: cnpj },
        attributes: ["nome", "cnpj"],
      });
      if (verificaCnpj === null) {
        return res
          .status(200)
          .json({ mensagem: `CNPJ autorizado para cadastro` });
      } else {
        return res.status(200).json({ mensagem: `CNPJ já cadastrado!` });
      }
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async pegaEmpresa(req, res) {
    try {
      const getCompany = await database.empresa.findAll({
        order: ["nome"],
        attributes: ["id", "nome", "cnpj"],
      });
      return res.status(200).json(getCompany);
    } catch (error) {
      return res.status(500).json({ message: "Empresa não encontrada" });
    }
  }

  static async pegaEmpresaPorId(req, res) {
    const { id } = req.params;
    try {
      const getCompany = await database.empresa.findByPk(id, {
        attributes: ["id", "nome", "cnpj"],
      });
      if (!getCompany) {
        return res.status(404).json({ message: "Empresa não encontrada" });
      }
      return res.status(200).json(getCompany);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar empresa" });
    }
  }

  static async atualizaempresa(req, res) {
    const { id } = req.params;
    const empresa = req.body;
    // console.log('user', user)
    try {
      await database.empresa.update(empresa, { where: { id: Number(id) } });
      const updateCompany = await database.empresa.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updateCompany);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } 

  static async deletaEmpresa(req, res) {
    const { id } = req.params;

    const apaga = await database.empresa.findOne({
          where: { id: Number(id) },
          attributes: ["nome"],
        });

    try {
      await database.empresa.destroy({ where: { id: Number(id) } });
      return res.status(200).json({
        mensagem: `A Empresa ${apaga.nome} foi excluida com sucesso!!`,
      });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = EmpresaController;
