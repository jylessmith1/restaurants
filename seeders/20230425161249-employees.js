'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', 
    [
      {
        first_name: 'John',
        last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Bob',
        last_name: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Alice',
        last_name: 'Johnson',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};