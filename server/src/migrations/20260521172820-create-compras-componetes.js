'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('compras_componetes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
        type: Sequelize.DECIMAL(10,2),
      },
      valor_total: {
        type: Sequelize.DECIMAL(10,2),
      },
      valor_unitario: {
        type: Sequelize.DECIMAL(10,2),
      },
      data_compra: {
        type: Sequelize.DATEONLY
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
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('compras_componetes');
  }
};