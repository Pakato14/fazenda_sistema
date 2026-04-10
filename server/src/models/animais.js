"use strict";
const { Model } = require("sequelize");
const formatarTextoPtBr = require("../utils/formatarTextoPtBr");
module.exports = (sequelize, DataTypes) => {
  class animais extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      animais.hasMany(models.lote, { foreignKey: "animal_id", as: "ass_animal_lote" });
    }
  }
  animais.init(
    {
      tipo: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "animais",
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
  return animais;
};

// const CAMPOS_EXCLUIDOS = [
//   'pedido', 'regime_cultivo'
// ];

// 🔹 Função genérica: percorre TODOS os campos STRING
function formatarCamposString(instance) {
  Object.keys(instance.dataValues).forEach((campo) => {
    
    const valor = instance.dataValues[campo];

    if (typeof valor === "string") {
      instance.dataValues[campo] = formatarTextoPtBr(valor.trim());
    }
  });
}
