const { Router } = require('express');
const DashboardController = require('../controllers/DashboardControllers');

const router = Router();
router.post('/resumo/:loteId', DashboardController.resumoLote);


module.exports = router