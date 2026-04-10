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
      const novaRacao = await database.racao.create(newFood);
      return res.status(200).json(novaRacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerLote(req, res) {
    const newLot = req.body;
    // console.log('newLot', newLot);
    try {
      const novoLote = await database.lote.create(newLot);
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
      const novoConsumoRacao = await database.consumo_racao.create(newFoodConsumption);
      return res.status(200).json(novoConsumoRacao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerVacina(req, res) {
    const newVaccine = req.body;
    // console.log('newVaccine', newVaccine);
    try {
      const novaVacina = await database.vacina.create(newVaccine);
      return res.status(200).json(novaVacina);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerAplicacaoVacina(req, res) {
    const newVaccineApplication = req.body;
    // console.log('newVaccineApplication', newVaccineApplication);
    try {
      const novaAplicacaoVacina = await database.aplicacao_vacina.create(newVaccineApplication);
      return res.status(200).json(novaAplicacaoVacina);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  //MÉTODOS GET
  static async getAnimais(req, res) {
    try {
      const animais = await database.animais.findAll({
        order: [["id", "ASC"]],
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
      const racoes = await database.racao.findAll({
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
      const lotes = await database.lote.findAll({
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

  static async getVacinas(req, res) {
    try {
      const vacinas = await database.vacina.findAll({
        order: [["nome", "ASC"]],
        attributes: ["id", "nome", "dias_aplicacao"],        
      });

      return res.status(200).json(vacinas);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }


  //MÉTODOS UPDATE

  static async updateAnimal(req, res) {
    const id = req.params.id;
    const updatedAnimal = req.body;

    try {
      const animal = await database.animais.findByPk(id);
      if (!animal) {
        return res.status(404).json({ message: "Animal não encontrado" });
      }

      await animal.update(updatedAnimal);
      return res.status(200).json(animal);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateTipoCusto(req, res) {
    const id = req.params.id;
    const updatedTipoCusto = req.body;

    try {
      const tipoCusto = await database.tipo_custo.findByPk(id);
      if (!tipoCusto) {
        return res.status(404).json({ message: "Tipo de custo não encontrado" });
      }

      await tipoCusto.update(updatedTipoCusto);
      return res.status(200).json(tipoCusto);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateVacina(req, res) {
    const id = req.params.id;
    const updatedVacina = req.body;

    try {
      const vacina = await database.vacina.findByPk(id);
      if (!vacina) {
        return res.status(404).json({ message: "Vacina não encontrada" });
      }

      await vacina.update(updatedVacina);
      return res.status(200).json(vacina);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async updateRacao(req, res) {
    const id = req.params.id;
    const updatedRacao = req.body;

    try {
      const racao = await database.racao.findByPk(id);
      if (!racao) {
        return res.status(404).json({ message: "Ração não encontrada" });
      }

      await racao.update(updatedRacao);
      return res.status(200).json(racao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }


  //MÉTODOS DE EXCLUIR
  static async deleteAnimal(req, res) {
    const id = req.params.id;

    try {
      const animal = await database.animais.findByPk(id);
      if (!animal) {
        return res.status(404).json({ message: "Animal não encontrado" });
      }

      await animal.destroy();
      return res.status(200).json({ message: "Animal excluído com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteTipoCusto(req, res) {
    const id = req.params.id;

    try {
      const tipoCusto = await database.tipo_custo.findByPk(id);
      if (!tipoCusto) {
        return res.status(404).json({ message: "Tipo de custo não encontrado" });
      }

      await tipoCusto.destroy();
      return res.status(200).json({ message: "Tipo de custo excluído com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteVacina(req, res) {
    const id = req.params.id;

    try {
      const vacina = await database.vacina.findByPk(id);
      if (!vacina) {
        return res.status(404).json({ message: "Vacina não encontrada" });
      }

      await vacina.destroy();
      return res.status(200).json({ message: "Vacina excluída com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async deleteRacao(req, res) {
    const id = req.params.id;

    try {
      const racao = await database.racao.findByPk(id);
      if (!racao) {
        return res.status(404).json({ message: "Ração não encontrada" });
      }

      await racao.destroy();
      return res.status(200).json({ message: "Ração excluída com sucesso" });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

}

module.exports = OperacionalControllers;
