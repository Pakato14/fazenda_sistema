'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_custo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      tipo_custo.hasMany(models.custo, { foreignKey: 'tipo_custo_id', as: 'ass_tipo_custo_custo' });
    }
  }
  tipo_custo.init({
    nome: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_custo',
  });
  return tipo_custo;
};