'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Meats', [{ // 1
        name: '50/50 burger patty (half ground beef and half ground bacon)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 2
        name: '50/50 kangaroo patty (half ground beef and half ground kangaroo meat)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 3
        name: 'Angus beef patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 4
        name: 'Ground beef patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 5
        name: 'Ground buffalo meat patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 6
        name: 'Slugburger patty (ground beef or pork with soy grits)',
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
        name: 'Tuna mix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 10
        name: 'Impossible burger patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 11
        name: 'Tofu burger patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 12
        name: 'Split beef patty with a frankfurter placed between the halves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 13
        name: 'Bacon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 14
        name: 'Ground chicken patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 15
        name: 'Ground lamb patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 16
        name: 'Ground, sliced, or minced beef steak',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('meat', null, {});
  }
};
