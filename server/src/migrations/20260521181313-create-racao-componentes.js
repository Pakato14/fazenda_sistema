'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('racao_componentes', {
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
      componente_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "componentes_racaos",
          key: "id",
        },
      },
      quantidade: {
        type: Sequelize.DECIMAL(10,2)
      },
      custo_unitario: {
        type: Sequelize.DECIMAL(10,2)
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
    await queryInterface.dropTable('racao_componentes');
  }
};