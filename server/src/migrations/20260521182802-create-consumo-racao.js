'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('consumo_racaos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      data: {
        type: Sequelize.DATEONLY
      },
      quantidade_kg: {
        type: Sequelize.DECIMAL(10,2)
      },
      lote_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'lotes', key: 'id' }
      },
      racao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'racaos', key: 'id' }
      },
      producao_racao_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'producao_racoes', key: 'id' }
      },
      custo_total: {
        type: Sequelize.DECIMAL(10,2)
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
    await queryInterface.dropTable('consumo_racaos');
  }
};