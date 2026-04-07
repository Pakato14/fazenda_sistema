'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('movimentacao_animal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATE
      },
      tipo_movimentacao: {
        type: Sequelize.STRING
      },
      quatidade: {
        type: Sequelize.INTEGER
      },
      observacao: {
        type: Sequelize.STRING
      },
      lote_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'lotes', key: 'id' }
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
    await queryInterface.dropTable('movimentacao_animal');
  }
};