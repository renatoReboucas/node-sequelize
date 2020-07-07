const express = require('express')
const bodyParser = require('body-parser')


const app  = express()

app.use(bodyParser.json())

const port = 3333

app.get('/', (req, res) =>{
  res.status(200)
  .send({message: 'boas-vindas a API'})
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`);
  
})