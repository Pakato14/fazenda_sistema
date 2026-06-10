const database = require("../models");

class RacaoController {
  static async register(req, res) {
    const newRegister = req.body;
    // console.log('newRegister', newRegister);
    try {
      const novoRegistro = await database.componentes_racao.create(newRegister);
      return res.status(200).json(novoRegistro);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async compraComponente(req, res) {
    const newComponente = req.body;

    try {
      // Cadastra a compra
      const novoComponente =
        await database.compras_componetes.create(newComponente);

      // Atualiza o estoque do componente
      await database.componentes_racao.increment(
        { estoque_atual: Number(newComponente.quantidade) },
        {
          where: {
            id: newComponente.componente_id,
          },
        },
      );

      return res.status(200).json(novoComponente);
    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
  }

  static async consumoComponente(req, res) {
    const newComponenteConsumption = req.body;
    // console.log('newComponenteConsumption', newComponenteConsumption);
    try {
      const novoComponente = await database.racao_componentes.create(
        newComponenteConsumption,
      );
      return res.status(200).json(novoComponente);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async cadastraRacaoComponentes(req, res) {
    const novaRacaoComponenete = req.body;
    // console.log('novaRacaoComponenete', novaRacaoComponenete);
    try {
      const racao = await database.racao_componentes.create(novaRacaoComponenete);
      return res.status(200).json(racao);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  static async registerRacao(req, res) {
      const newFood = req.body;
      console.log('newFood', newFood);
      try {
        const novaRacao = await database.racao.create(newFood);
        return res.status(200).json(novaRacao);
      } catch (error) {
        return res.status(500).json(error.message);
      }
    }

}

module.exports = RacaoController;
