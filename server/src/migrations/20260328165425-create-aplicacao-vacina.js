'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('aplicacao_vacinas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data_aplicacao: {
        type: Sequelize.DATE
      },
      observacao: {
        type: Sequelize.STRING
      },
      lote_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'lotes', key: 'id' }
      },
      vacina_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'vacinas', key: 'id' }
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
    await queryInterface.dropTable('aplicacao_vacinas');
  }
};