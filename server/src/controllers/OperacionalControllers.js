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
    // console.log('newTypeCoast', newTypeCoast);
    try {
      const novoTipoCusto = await database.tipo_custos.create(newTypeCoast);
      return res.status(200).json(novoTipoCusto);
    } catch (error) {
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
}

module.exports = OperacionalControllers;
