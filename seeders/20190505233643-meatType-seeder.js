'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Meats', [{
        // 1
        name: '50/50 Burger Patty, half ground beef and half ground bacon.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 2
        name: '50/50 Kangaroo Patty, half ground beef and half ground kangaroo meat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 3
        name: 'Angus Beef Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 4
        name: 'Ground Beef Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 5
        name: 'Ground Buffalo Meat Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 6
        name: 'Slugburger Patty, ground beef or pork with soy grits.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 7
        name: 'Salmon fishcake patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 8
        name: 'Spam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 9
        name: 'Tuna Mix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 10
        name: 'Impossible Burger Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 11
        name: 'Tofu Burger Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 12
        name: 'Split Beef Patty with a Frankfurter Placed Between the Halves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 13
        name: 'bacon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 14
        name: 'ground chicken patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 15
        name: 'ground lamb patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 16
        name: 'ground, sliced, or minced beef steak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Meat', null, {});
  }
};
