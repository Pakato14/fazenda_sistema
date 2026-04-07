const { Router } = require('express');
const AnimalController = require('../controllers/AnimalsControllers');

const router = Router();
router.post('/cadastroAnimal', AnimalController.register);


module.exports = router