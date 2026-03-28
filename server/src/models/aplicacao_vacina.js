'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class aplicacao_vacina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      aplicacao_vacina.belongsTo(models.lote, { foreignKey: 'lote_id', as: 'ass_aplicacao_vacina_lote' });
      aplicacao_vacina.belongsTo(models.vacina, { foreignKey: 'vacina_id', as: 'ass_aplicacao_vacina_vacina' });
    }
  }
  aplicacao_vacina.init({
    data_aplicacao: DataTypes.DATE,
    observacao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'aplicacao_vacina',
  });
  return aplicacao_vacina;
};