'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Reservations', 
    [
       {
          reservation_time:'2023-05-01T12:00:00Z',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reservation_time:'2023-05-02T15:30:00Z',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reservation_time:'2023-05-05T19:00:00Z',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reservation_time:'2023-05-06T13:45:00Z',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          reservation_time:'2023-05-08T18:15:00Z',
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