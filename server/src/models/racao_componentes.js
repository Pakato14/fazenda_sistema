'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class racao_componentes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      racao_componentes.belongsTo(models.racao, { foreignKey: 'racao_id', as: 'ass_racao' });
      racao_componentes.belongsTo(models.componentes_racao, { foreignKey: 'componente_id', as: 'ass_component' });
    }
  }
  racao_componentes.init({
    quantidade: DataTypes.DECIMAL(10,2),
    custo_unitario: DataTypes.DECIMAL(10,2),
    custo_total: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'racao_componentes',
  });
  return racao_componentes;
};