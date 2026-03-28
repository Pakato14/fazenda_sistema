'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class animais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      animais.hasMany(models.lote, { foreignKey: 'animal_id', as: 'ass_animal_lote' })
    }
  }
  animais.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'animais',
  });
  return animais;
};