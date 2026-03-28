'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vacina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      vacina.hasMany(models.aplicacao_vacina, { foreignKey: 'vacina_id', as: 'ass_vacina_aplicacao_vacina' });
    }
  }
  vacina.init({
    nome: DataTypes.STRING,
    dias_aplicacao: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'vacina',
  });
  return vacina;
};