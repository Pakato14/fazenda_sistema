"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("componentes_racaos", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      nome_componente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "nome_componente_racaos",
          key: "id",
        },
      },
      unidade_medida: {
        type: Sequelize.STRING,
      },
      estoque_atual: {
        type: Sequelize.DECIMAL(10,2),
      },
      custo_unitario: {
        type: Sequelize.DECIMAL(10,2),
      },
      fornecedor_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "fornecedors",
          key: "id",
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("componentes_racaos");
  },
};
