'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class controle_animais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  controle_animais.init({
    data: DataTypes.DATE,
    quatidade_vivos: DataTypes.INTEGER,
    quatidade_mortos: DataTypes.INTEGER,
    quatidade_defeituosos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'controle_animais',
  });
  return controle_animais;
};