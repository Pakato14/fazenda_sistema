'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class lote extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      lote.belongsTo(models.animais, { foreignKey: 'animal_id', as: 'ass_lote_animal' });
      lote.hasMany(models.movimentacao_animal, { foreignKey: 'lote_id', as: 'ass_lote_movimentacao_animal' });
      lote.hasMany(models.consumo_racao, { foreignKey: 'lote_id', as: 'ass_lote_consumo_racao' });
      lote.hasMany(models.custo, { foreignKey: 'lote_id', as: 'ass_lote_custo' });
      lote.hasMany(models.aplicacao_vacina, { foreignKey: 'lote_id', as: 'ass_lote_aplicacao_vacina' });
    }
  }
  lote.init({
    // numero_registro: DataTypes.STRING,
    nome_lote: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    quantidade_inicial: DataTypes.INTEGER,
    valor_cabeca: DataTypes.DECIMAL(10,2),
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'lote',
  });
  return lote;
};