'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Condiments', [{ // 1
        name: 'sunny side up egg', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 2
        name: 'avocados sliced or mashed / guacamole',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 3
        name: 'pepper jack cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 4
        name: 'chipotle adobo mayo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 5
        name: 'lettuce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 6
        name: 'mayonaise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 7
        name: 'fried onions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 8
        name: 'A1 steak sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 9
        name: 'American cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ //10
        name: 'tomato slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 11
        name: 'mashed baked potatoes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 12
        name: 'grilled onions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 13
        name: 'beetroot',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 14
        name: 'pineapple slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 15
        name: 'fried egg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 16
        name: 'pickles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 17
        name: 'onion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 18 
        name: 'ketchup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 19
        name: 'mustard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 20 
        name: 'cheddar cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 21 
        name: 'Swiss cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 22
        name: 'mozzarella cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 23
        name: 'blue Cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 24
        name: 'bbq sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 25
        name: 'gravy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 26
        name: 'remoulade',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 27
        name: 'butter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 28
        name: 'chili',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 29 
        name: 'cole slaw',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 30
        name: 'yogurt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 31
        name: 'green peppers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 32
        name: 'french fries',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 33
        name: 'teriyaki sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 34
        name: 'kimchi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 35
        name: 'red or green chili sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 36
        name: 'mushrooms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },], {});
  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Condiments', null, {});
  }
};
