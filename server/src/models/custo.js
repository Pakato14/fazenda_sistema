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
      custo.belongsTo(models.tipo_custo, { foreignKey: 'tipo_custo_id', as: 'ass_custo_tipo_custo' });
    }
  }
  custo.init({
    tipo: DataTypes.STRING,
    descricao: DataTypes.STRING,
    valor: DataTypes.DECIMAL(10,2),
    data: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'custo',
  });
  return custo;
};