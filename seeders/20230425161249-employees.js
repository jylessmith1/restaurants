'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Employees', [
      {
        first_name: 'John',
        Last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Jane',
        Last_name: 'Doe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Bob',
        Last_name: 'Smith',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        first_name: 'Alice',
        Last_name: 'Johnson',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Employees', null, {});
  }
};