const {Router} = require('express')
const PessoaController = require('../Controllers/PessoaController')
const PessoasController = require('../Controllers/PessoaController')

const router = Router()

router.get('/pessoas', PessoasController.index)

module.exports = router