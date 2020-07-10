const database = require('../models')

class PessoasController{
  //procura todas as pessoas e retorna elas
  static async index(req, res){
    try{
      const allPeople = await database.Pessoas.findAll()
      return res.status(200).json(allPeople)
    }catch(error){
      return res.status(500).json(error.message)
    }
  }
}

module.exports = PessoasController