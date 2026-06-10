const { Router } = require('express');
const RacaoController = require('../controllers/RacaoControllers.js');

const router = Router();
router.post('/registerComponente', RacaoController.register);
router.post('/compraComponente', RacaoController.compraComponente);
router.post('/consumoComponente', RacaoController.consumoComponente);
router.post('/cadastroRacao', RacaoController.registerRacao);


module.exports = router