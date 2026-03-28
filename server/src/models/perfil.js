'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      perfil.hasMany(models.user, { foreignKey: 'perfil_id', as: 'ass_perfil_user' });
    }
  }
  perfil.init({
    perfil: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'perfil',
  });
  return perfil;
};