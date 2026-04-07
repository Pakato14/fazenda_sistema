'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('custos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo: {
        type: Sequelize.STRING
      },
      descricao: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.DECIMAL(10,2)
      },
      data: {
        type: Sequelize.DATE
      },
      lote_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'lotes', key: 'id' }
      },
      tipo_custo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'tipo_custos', key: 'id' }
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
    await queryInterface.dropTable('custos');
  }
};