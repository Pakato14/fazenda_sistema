const { Router } = require('express');
const OperacionalController = require('../controllers/OperacionalControllers');

const router = Router();
router.post('/cadastroAnimal', OperacionalController.register);
router.post('/cadastroTipoCusto', OperacionalController.registerTipoCusto);
router.post('/cadastroRacao', OperacionalController.registerRacao);
router.post('/cadastroLote', OperacionalController.registerLote);
router.post('/cadastroCustos', OperacionalController.registerCusto);
router.post('/cadastroMovimentacaoAnimal', OperacionalController.registerMovimentacaoAnimal);
router.post('/cadastroConsumoRacao', OperacionalController.registerConsumoRacao);
router.post('/cadastroVacina', OperacionalController.registerVacina);
router.post('/cadastroAplicacaoVacina', OperacionalController.registerAplicacaoVacina);


module.exports = router