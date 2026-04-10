'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('lotes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      // numero_registro: {
      //   type: Sequelize.STRING
      // },
      animal_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'animais', key: 'id' }
      },
      nome_lote: {
        type: Sequelize.STRING
      },
      data_nascimento: {
        type: Sequelize.DATE
      },
      quantidade_inicial: {
        type: Sequelize.INTEGER
      },
      valor_cabeca: {
        type: Sequelize.DECIMAL(10,2)
      },
      observacao: {
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
    await queryInterface.dropTable('lotes');
  }
};