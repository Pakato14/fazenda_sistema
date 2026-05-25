const { Router } = require('express')
const FornecedorController = require('../controllers/FornecedorControllers');
var auth = require('../service/AutenticaService');
var checkPerfil = require('../service/checkPerfil');


const router = Router()
router.post('/registerfornecedor', FornecedorController.cadastraFornecedor)
router.get('/checkcnpj/:cnpj', FornecedorController.checarFornecedor)
router.get('/takefornecedor', FornecedorController.pegaFornecedor)
router.get('/allfornecedores', auth.authenticatedUser, checkPerfil.checkPerfil([1]), FornecedorController.pegaFornecedor)
router.get('/fornecedor/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), FornecedorController.pegaFornecedorPorId)
router.put('/atualizaFornecedor/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), FornecedorController.atualizaFornecedor)
router.delete('/fornecedor/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), FornecedorController.deletaFornecedor)


module.exports = router