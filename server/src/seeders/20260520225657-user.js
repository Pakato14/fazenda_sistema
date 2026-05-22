"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          empresa_id: 1,
          nome: "Daniel Oliveira Araújo",
          user_name: "Daniel Araújo",
          user_email: "danieloliveira14@gmail.com",
          user_active: true,
          user_password: "$2b$10$9e8T/ZbCDB388lMyc4E/1OVsUNewvFS8vwKEqhI5OFCVPo/eH9G6O",
          user_pin: "2349",
          cpf: "93307390325",
          perfil_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
