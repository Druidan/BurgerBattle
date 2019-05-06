'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Breads', [{
        name: 'Standard Hamburger Bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'White Brioche Bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Seasame Seed Bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Hamdog Shaped Bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Grilled Bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Compressed Rice Cake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Sliced Doghnut',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Naan Bread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Sliced Bread Roll',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Breads', null, {});

  }
};
