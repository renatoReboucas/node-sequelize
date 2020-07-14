const {Router} = require('express')
const PessoaController = require('../Controllers/PessoaController')
const PessoasController = require('../Controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoasController.index)
router.get('/pessoas/:id', PessoasController.pegaUmaPessoa)
router.post('/pessoas', PessoasController.criaPessoa)

module.exports = router