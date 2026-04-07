'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      empresa_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'empresas', key: 'id' },
        onDelete: "Cascade",
        onUpdate: "Cascade"
      },
      nome: {
        type: Sequelize.STRING
      },
      user_name: {
        type: Sequelize.STRING
      },
      user_email: {
        type: Sequelize.STRING
      },
      user_active: {
        type: Sequelize.BOOLEAN
      },
      user_password: {
        type: Sequelize.STRING
      },
      user_pin: {
        type: Sequelize.STRING
      },
      cpf: {
        type: Sequelize.STRING
      },
      perfil_id: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: { model: 'perfils', key: 'id' },
        onDelete: "Cascade",
        onUpdate: "Cascade"
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
    await queryInterface.dropTable('users');
  }
};