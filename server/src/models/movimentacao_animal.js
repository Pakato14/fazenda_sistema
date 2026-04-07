'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class movimentacao_animal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      movimentacao_animal.belongsTo(models.lote, { foreignKey: 'lote_id', as: 'ass_movimentacao_animal_lote' });
    }
  }
  movimentacao_animal.init({
    data: DataTypes.DATE,
    tipo_movimentacao: DataTypes.STRING,
    quatidade: DataTypes.INTEGER,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'movimentacao_animal',
  });
  return movimentacao_animal;
};