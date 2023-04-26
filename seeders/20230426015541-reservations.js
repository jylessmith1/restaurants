'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', 
    [
      {
        time: '2023-05-01 12:00:00.000',
        table_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time: '2023-05-02 15:30:00.000',
        table_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time: '2023-05-05 19:00:00.000',
        table_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time: '2023-05-06 13:45:00.000',
        table_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        time: '2023-05-08 18:15:00.000',
        table_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ],
       {});
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Reservations', null, {});
  }
};