const {Router} = require('express')
const PessoaController = require('../Controllers/PessoaController')
const PessoasController = require('../Controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoasController.index)
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa)
router.post('/pessoas', PessoasController.criaPessoa)
router.put('/pessoas/:id', PessoasController.atualizaPessoa)
router.delete('/pessoas/:id', PessoasController.apagaPessoa)
router.get('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.pegaUmaMatricula)
router.post('/pessoas/:estudanteId/matricula', PessoasController.criaMatricula)
router.put('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.atualizaMatricula)
router.delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoasController.apagaMatricula)

module.exports = router