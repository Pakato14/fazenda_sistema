const database = require("../models");

class OperacionalControllers {
  static async register(req, res) {
    const newRegister = req.body;
    // console.log('newRegister', newRegister);
    try {
      const novoRegistro = await database.animais.create(newRegister);
      return res.status(200).json(novoRegistro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerTipoCusto(req, res) {
    const newTypeCoast = req.body;
    try {
      const novoTipoCusto = await database.tipo_custo.create(newTypeCoast);
      return res.status(200).json(novoTipoCusto);
    } catch (error) {
      console.log('error', error);
      return res.status(500).json(error.message);
    }
  }

  static async registerRacao(req, res) {
    const newFood = req.body;
    // console.log('newFood', newFood);
    try {
      const novaRacao = await database.racaos.create(newFood);
      return res.status(200).json(novaRacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerLote(req, res) {
    const newLot = req.body;
    // console.log('newLot', newLot);
    try {
      const novoLote = await database.lotes.create(newLot);
      return res.status(200).json(novoLote);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerCusto(req, res) {
    const newCoast = req.body;
    // console.log('newCoast', newCoast);
    try {
      const novoCusto = await database.custos.create(newCoast);
      return res.status(200).json(novoCusto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerMovimentacaoAnimal(req, res) {
    const newMovement = req.body;
    // console.log('newMovement', newMovement);
    try {
      const novaMovimentacao = await database.movimentacao_animal.create(newMovement);
      return res.status(200).json(novaMovimentacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerConsumoRacao(req, res) {
    const newFoodConsumption = req.body;
    // console.log('newFoodConsumption', newFoodConsumption);
    try {
      const novoConsumoRacao = await database.consumo_racaoa.create(newFoodConsumption);
      return res.status(200).json(novoConsumoRacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerVacina(req, res) {
    const newVaccine = req.body;
    // console.log('newVaccine', newVaccine);
    try {
      const novaVacina = await database.vacinas.create(newVaccine);
      return res.status(200).json(novaVacina);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerAplicacaoVacina(req, res) {
    const newVaccineApplication = req.body;
    // console.log('newVaccineApplication', newVaccineApplication);
    try {
      const novaAplicacaoVacina = await database.aplicacao_vacinas.create(newVaccineApplication);
      return res.status(200).json(novaAplicacaoVacina);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //MÉTODOS GET
  static async getAnimais(req, res) {
    try {
      const animais = await database.animais.findAll({
        order: [["tipo", "ASC"]],
        attributes: ["id", "tipo"],
      });

      return res.status(200).json(animais);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getTiposCusto(req, res) {
    try {
      const tiposCusto = await database.tipo_custo.findAll({
        order: [["nome", "ASC"]],
        attributes: ["id", "nome"],
      });

      return res.status(200).json(tiposCusto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getRacoes(req, res) {
    try {
      const racoes = await database.racaos.findAll({
        order: [["tipo_racao", "ASC"]],
        attributes: ["id", "tipo_racao", "custo_por_kg"],
      });

      return res.status(200).json(racoes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getLotes(req, res) {
    try {
      const lotes = await database.lotes.findAll({
        order: [["numero_registro", "ASC"]],
        attributes: ["id", "numero_registro", "nome_lote", "data_nascimento", "valor_cabeca", "quantidade_inicial", "observacao"],
        include: [
          { association: "ass_lote_animal",
            attributes: ["id", "tipo"]
          }
        ],
      });

      return res.status(200).json(lotes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async getCustos(req, res) {
    try {
      const lotes = await database.custos.findAll({
        order: [["tipo", "ASC"]],
        attributes: ["id", "tipo", "descricao", "valor", "data"],
        include: [
          { association: "ass_custo_lote",
            attributes: ["id", "numero_registro", "nome_lote", "data_nascimento", "valor_cabeca", "quantidade_inicial", "observacao"],
          },
          { association: "ass_custo_tipo_custo",
            attributes: ["id", "nome"],
          }
        ],
      });

      return res.status(200).json(lotes);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = OperacionalControllers;
