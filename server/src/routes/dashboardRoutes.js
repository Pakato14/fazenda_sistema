const { Router } = require('express');
const DashboardController = require('../controllers/DashboardControllers');

const router = Router();
router.post('/resumo', DashboardController.resumoGeral);


module.exports = router