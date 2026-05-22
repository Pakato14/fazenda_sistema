'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class compras_componetes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      compras_componetes.belongsTo(models.componentes_racao, { foreignKey: 'componente_id', as: 'ass_compracomponente' });
      compras_componetes.belongsTo(models.fornecedor, { foreignKey: 'fornecedor_id', as: 'ass_compras_fornecedor' });
    }
  }
  compras_componetes.init({
    quantidade: DataTypes.DECIMAL(10,2),
    valor_total: DataTypes.DECIMAL(10,2),
    valor_unitario: DataTypes.DECIMAL(10,2),
    data_compra: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'compras_componetes',
  });
  return compras_componetes;
};