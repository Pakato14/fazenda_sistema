const database = require("../models");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

class FornecedorController {
  static async cadastraFornecedor(req, res) {
    try {
      const novoFornecedor = req.body;

      if (!novoFornecedor.nome || !novoFornecedor.cnpj) {
        return res.status(400).json({ message: "Dados obrigatórios ausentes" });
      }

      const cnpjExistente = await database.fornecedor.findOne({
        where: { cnpj: novoFornecedor.cnpj },
      });
      if (cnpjExistente) {
        return res.status(400).json({ message: "CNPJ já cadastrado!" });
      }      

      const fornecedorCriado = await database.fornecedor.create(novoFornecedor);

      // 🔹 Retorna o cadastro imediatamente
      res.status(201).json(fornecedorCriado);

    } catch (error) {
      console.error(error);
      if (!res.headersSent) {
        return res.status(500).json({ message: error.message });
      }
    }
  }

  static async checarFornecedor(req, res) {
    const { cnpj } = req.params;
    try {
      const verificaCnpj = await database.fornecedor.findOne({
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

  static async pegaFornecedor(req, res) {
    try {
      const getFornecedor = await database.fornecedor.findAll({
        order: ["nome"],
        attributes: ["id", "nome", "cnpj"],
      });
      return res.status(200).json(getFornecedor);
    } catch (error) {
      return res.status(500).json({ message: "Fornecedor não encontrado" });
    }
  }

  static async pegaFornecedorPorId(req, res) {
    const { id } = req.params;
    try {
      const getFornecedor = await database.fornecedor.findByPk(id, {
        attributes: ["id", "nome", "cnpj"],
      });
      if (!getFornecedor) {
        return res.status(404).json({ message: "Fornecedor não encontrado" });
      }
      return res.status(200).json(getFornecedor);
    } catch (error) {
      return res.status(500).json({ message: "Erro ao buscar fornecedor" });
    }
  }

  static async atualizaFornecedor(req, res) {
    const { id } = req.params;
    const fornecedor = req.body;
    // console.log('user', user)
    try {
      await database.fornecedor.update(fornecedor, { where: { id: Number(id) } });
      const updateFornecedor = await database.fornecedor.findOne({
        where: { id: Number(id) },
      });
      return res.status(200).json(updateFornecedor);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } 

  static async deletaFornecedor(req, res) {
    const { id } = req.params;

    const apaga = await database.fornecedor.findOne({
          where: { id: Number(id) },
          attributes: ["nome"],
        });

    try {
      await database.fornecedor.destroy({ where: { id: Number(id) } });
      return res.status(200).json({
        mensagem: `O Fornecedor ${apaga.nome} foi excluido com sucesso!!`,
      });
    } catch (erro) {
      return res.status(500).json(erro.message);
    }
  }
}

module.exports = FornecedorController;
