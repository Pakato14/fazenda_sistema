'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class custo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      custo.belongsTo(models.lote, { foreignKey: 'lote_id', as: 'ass_custo_lote' });
    }
  }
  custo.init({
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'custo',
  });
  return custo;
};