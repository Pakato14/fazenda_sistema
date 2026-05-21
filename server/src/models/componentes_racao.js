'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class componentes_racao extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      componentes_racao.belongsTo(models.nome_componente_racao, { foreignKey: 'nome_componente_id', as: 'ass_componente_nome' });
      componentes_racao.belongsTo(models.fornecedor, { foreignKey: 'fornecedor_id', as: 'ass_componente_fornecedor' });
      componentes_racao.hasMany(models.compras_componetes, { foreignKey: 'componente_id', as: 'ass_componente_compra' });
      componentes_racao.hasMany(models.racao_componetes, { foreignKey: 'componente_id', as: 'ass_componentes' });
    }
  }
  componentes_racao.init({
    unidade_medida: DataTypes.STRING,
    estoque_atual: DataTypes.DECIMAL(10,2),
    custo_unitario: DataTypes.DECIMAL(10,2)
  }, {
    sequelize,
    modelName: 'componentes_racao',
  });
  return componentes_racao;
};