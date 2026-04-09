const { Router } = require('express');
const OperacionalController = require('../controllers/OperacionalControllers');

const router = Router();
//MÉTODOS POST
router.post('/cadastroAnimal', OperacionalController.register);
router.post('/cadastroTipoCusto', OperacionalController.registerTipoCusto);
router.post('/cadastroRacao', OperacionalController.registerRacao);
router.post('/cadastroLote', OperacionalController.registerLote);
router.post('/cadastroCustos', OperacionalController.registerCusto);
router.post('/cadastroMovimentacaoAnimal', OperacionalController.registerMovimentacaoAnimal);
router.post('/cadastroConsumoRacao', OperacionalController.registerConsumoRacao);
router.post('/cadastroVacina', OperacionalController.registerVacina);
router.post('/cadastroAplicacaoVacina', OperacionalController.registerAplicacaoVacina);

//MÉTODOS GET
router.get('/getAnimais', OperacionalController.getAnimais);
router.get('/getTipocusto', OperacionalController.getTiposCusto);
router.get('/getRacoes', OperacionalController.getRacoes);
router.get('/getLotes', OperacionalController.getLotes);
router.get('/getCustos', OperacionalController.getCustos);
// router.get('/getMovimentacaoAnimal', OperacionalController.getMovimentacaoAnimal);
// router.get('/getConsumoRacao', OperacionalController.getConsumoRacao);
router.get('/getVacinas', OperacionalController.getVacinas);
// router.get('/getAplicacaoVacina', OperacionalController.getAplicacaoVacina);

//MÉTODOS PATCH
router.patch('/updateAnimal/:id', OperacionalController.updateAnimal);
router.patch('/updateTipoCusto/:id', OperacionalController.updateTipoCusto);
router.patch('/updateVacina/:id', OperacionalController.updateVacina);
router.patch('/updateRacao/:id', OperacionalController.updateRacao);

//MÉTODOS DELETE
router.delete('/animal/:id', OperacionalController.deleteAnimal);
router.delete('/tipocusto/:id', OperacionalController.deleteTipoCusto);
router.delete('/vacina/:id', OperacionalController.deleteVacina);
router.delete('/racao/:id', OperacionalController.deleteRacao);


module.exports = router