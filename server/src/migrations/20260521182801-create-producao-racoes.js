'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('producao_racoes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      racao_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "racaos",
          key: "id",
        },
      },
      codigo_lote: {
        type: Sequelize.STRING
      },
      quantidade_produzida: {
        type: Sequelize.DECIMAL(10,2)
      },
      custo_total: {
        type: Sequelize.DECIMAL(10,2)
      },
      data_producao: {
        type: Sequelize.DATEONLY
      },
      status: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('producao_racoes');
  }
};