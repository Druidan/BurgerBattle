'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Condiments', [{
        name: 'sunny side up egg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'avocados sliced or mashed / guacamole',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'pepper jack cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'chipotle adobo mayo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'lettuce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'mayonaise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'fried onions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'A1 steak sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'American cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'tomato slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'mashed baked potatoes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'grilled onions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'beetroot',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'pineapple slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'fried egg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'pickles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'onion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'ketchup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'mustard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'cheddar cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'Swiss cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'mozzarella cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'blue Cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'bbq sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'gravy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'remoulade',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'butter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'chili',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'cole slaw',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'yogurt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'green peppers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'french fries',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'teriyaki sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'kimchi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'red or green chili sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{
        name: 'mushrooms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Condiments', null, {});
  }
};
