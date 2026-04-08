const { Router } = require('express')
const EmpresaController = require('../controllers/EmpresaControllers');
var auth = require('../service/AutenticaService');
var checkPerfil = require('../service/checkPerfil');


const router = Router()
router.post('/registercompany', EmpresaController.cadastraEmpresa)
router.get('/checkCompany/:cnpj', EmpresaController.checarEmpresa)
router.get('/takeCompany', EmpresaController.pegaEmpresa)
router.get('/allcompanies', auth.authenticatedUser, checkPerfil.checkPerfil([1]), EmpresaController.pegaEmpresa)
router.get('/empresa/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), EmpresaController.pegaEmpresaPorId)
router.put('/atualizaEmpresa/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), EmpresaController.atualizaempresa)
router.delete('/empresa/:id', auth.authenticatedUser, checkPerfil.checkPerfil([1]), EmpresaController.deletaEmpresa)


module.exports = router