'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class nome_componente_racao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      nome_componente_racao.hasMany(models.componentes_racao, { foreignKey: 'nome_componente_id', as: 'ass_componentes_racao'})
    }
  }
  nome_componente_racao.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'nome_componente_racao',
  });
  return nome_componente_racao;
};