'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class racao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      racao.belongsTo(models.lote, { foreignKey: 'lote_id', as: 'ass_racao_lote' });
    }
  }
  racao.init({
    data: DataTypes.DATE,
    tipo_racao: DataTypes.STRING,
    quantidade_kg: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'racao',
  });
  return racao;
};