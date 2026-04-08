"use strict";
const { Model } = require("sequelize");
const formatarTextoPtBr = require("../utils/formatarTextoPtBr");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      user.belongsTo(models.empresa, {
        foreignKey: "empresa_id",
        as: "ass_user_empresa",
      });
      user.belongsTo(models.perfil, {
        foreignKey: "perfil_id",
        as: "ass_user_perfil",
      });
      user.hasMany(models.audit, {
        foreignKey: "user_id",
        as: "ass_user_audit",
      });
    }
  }
  user.init(
    {
      nome: DataTypes.STRING,
      user_name: DataTypes.STRING,
      user_email: DataTypes.STRING,
      user_active: DataTypes.BOOLEAN,
      user_password: DataTypes.STRING,
      user_pin: DataTypes.STRING,
      cpf: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      // ✅ HOOKS NO LUGAR CERTO
      hooks: {
        beforeCreate: (instance) => {
          formatarCamposString(instance);
        },
        beforeUpdate: (instance) => {
          formatarCamposString(instance);
        },
      },
    },
  );
  return user;
};

const CAMPOS_EXCLUIDOS = [
  'user_password', 'user_email'
];

// 🔹 Função genérica: percorre TODOS os campos STRING
function formatarCamposString(instance) {
  Object.keys(instance.dataValues).forEach((campo) => {

    // ⛔ pula campos excluídos
    if (CAMPOS_EXCLUIDOS.includes(campo)) return;

    const valor = instance.dataValues[campo];

    if (typeof valor === 'string') {
      instance.dataValues[campo] = formatarTextoPtBr(valor.trim());
    }
  });
}
