'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perfils', [
    {
      perfil: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      perfil: 'Secretario',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      perfil: 'Coordenador',
      createdAt: new Date(),
      updatedAt: new Date()
     },
     {
      perfil: 'Colaborador',
      createdAt: new Date(),
      updatedAt: new Date()
     }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfils', null, {});
  }
};
