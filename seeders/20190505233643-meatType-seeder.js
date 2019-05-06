'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Meats', [{
        name: '50/50 Burger Patty, half ground beef and half ground bacon.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: '50/50 Kangaroo Patty, half ground beef and half ground kangaroo meat.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Angus Beef Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Ground Beef Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Ground Buffalo Meat Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Slugburger Patty, ground beef or pork with soy grits.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Salmon fishcake patty using a binder like egg.',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Spam',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Tuna Mix',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Impossible Burger Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Tofu Burger Patty',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Split Beef Patty with a Frankfurter Placed Between the Halves',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'bacon',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});

  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Meat', null, {});
  }
};
