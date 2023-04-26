'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('MenuItems',
     [
      {
        name: 'Cheeseburger',
        price: 9.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Chicken Sandwich',
        price: 8.99,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Caesar Salad',
        price: 6.99,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],{});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('MenuItems', null, {});
  }
};
