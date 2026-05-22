'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class consumo_racao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      consumo_racao.belongsTo(models.lote, { foreignKey: 'lote_id', as: 'ass_consumo_racao_lote' });
      consumo_racao.belongsTo(models.racao, { foreignKey: 'racao_id', as: 'ass_consumo_racao_racao' });
      consumo_racao.belongsTo(models.producao_racoes, { foreignKey: 'producao_racao_id', as: 'ass_consumo_racao_producao_racao' });
    }
  }
  consumo_racao.init({
    data: DataTypes.DATEONLY,
    quantidade_kg: DataTypes.DECIMAL(10,2),
    custo_total: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'consumo_racao',
  });
  return consumo_racao;
};