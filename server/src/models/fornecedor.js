'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class fornecedor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      fornecedor.hasMany(models.compras_componetes, { foreignKey: 'fornecedor_id', as: 'ass_fornecedor_compras'});
    }
  }
  fornecedor.init({
    nome: DataTypes.STRING,
    cnpj: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'fornecedor',
  });
  return fornecedor;
};