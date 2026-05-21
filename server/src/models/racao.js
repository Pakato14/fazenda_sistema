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
      racao.hasMany(models.racao_componentes, { foreignKey: 'racao_id', as: 'ass_racao_componentes' });
      racao.hasMany(models.producao_racoes, { foreignKey: 'racao_id', as: 'ass_racoes_producao' });
    }
  }
  racao.init({
    nome: DataTypes.STRING,
    descricao: DataTypes.STRING,
    custo_total_kg: DataTypes.DECIMAL(10,2),
    ativa: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'racao',
  });
  return racao;
};