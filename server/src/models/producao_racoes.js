'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class producao_racoes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      producao_racoes.hasMany(models.racao_componentes, { foreignKey: 'racao_id', as: 'ass_producao_racoes' });
      producao_racoes.hasMany(models.consumo_racao, { foreignKey: 'producao_racao_id', as: 'ass_producao_racoes_consumo' });
    }
  }
  producao_racoes.init({
    codigo_lote: DataTypes.STRING,
    quantidade_produzida: DataTypes.DECIMAL(10,2),
    custo_total: DataTypes.DECIMAL(10,2),
    data_producao: DataTypes.DATEONLY,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'producao_racoes',
  });
  return producao_racoes;
};