'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Breads', [{ // 1
        name: 'Standard hamburger bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 2
        name: 'White brioche bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 3
        name: 'Seasame seed bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 4
        name: 'Hamdog shaped bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 5
        name: 'Grilled bun',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 6
        name: 'Compressed rice cake',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 7
        name: 'Sliced donut',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 8
        name: 'Naan bread',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 9
        name: 'Sliced bread roll',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Breads', null, {});

  }
};
