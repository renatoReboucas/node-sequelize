const bodyParser = require('body-parser')
const pessoas = require('./pessoasRoutes')

module.exports = app => {
  app.use(bodyParser.json())

  // fala que vai usar o arquivo de rotas de pessoas
  app.use(pessoas)

  app.get('/', (req, res) => {
    res.status(200)
      .send({ message: 'boas-vindas a API' })
  })

  // app.get('')
}