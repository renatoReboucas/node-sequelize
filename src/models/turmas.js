'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Turmas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      //fala pra onde vai a acociacao
      Turmas.hasMany(models.Matriculas, {
        foreignKey: 'turma_id'
      })

      //referencia na tabela que a acociacao vai ser criada
      Turmas.belongsTo(Models.Pessoas, {
        foreignKey: 'docente_id'
      })
      Turmas.belongsTo(Models.Niveis, {
        foreignKey: 'nivel_id'
      })
    }
  };
  Turmas.init({
    data_inicio: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Turmas',
  });
  return Turmas;
};