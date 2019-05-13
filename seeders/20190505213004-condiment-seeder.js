'use strict';

//

module.exports = {
  up: (queryInterface, Sequelize) => { 
      return queryInterface.bulkInsert('Condiments', [{ // 1
        name: 'Sunny side up egg', 
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 2
        name: 'Avocados (sliced, mashed, or guacamole)',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 3
        name: 'Pepper jack cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 4
        name: 'Chipotle adobo mayo',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 5
        name: 'Lettuce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 6
        name: 'Mayonaise',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 7
        name: 'Fried onions',
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
        name: 'Tomato slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 11
        name: 'Mashed baked potatoes',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 12
        name: 'Grilled onions',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 13
        name: 'Beetroot',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 14
        name: 'Pineapple slices',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 15
        name: 'Fried egg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 16
        name: 'Pickles',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 17
        name: 'Onion',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 18 
        name: 'Ketchup',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 19
        name: 'Mustard',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 20 
        name: 'Cheddar cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 21 
        name: 'Swiss cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 22
        name: 'Mozzarella cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 23
        name: 'Blue Cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 24
        name: 'BBQ sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 25
        name: 'Gravy',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 26
        name: 'Remoulade',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 27
        name: 'Butter',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 28
        name: 'Chili',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 29 
        name: 'Cole slaw',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 30
        name: 'Greek yogurt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 31
        name: 'Green peppers',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 32
        name: 'French fries',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 33
        name: 'Teriyaki sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 34
        name: 'Kimchi',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 35
        name: 'Red or green chili sauce',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 36
        name: 'Mushrooms',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 37
        name: 'Curry powder',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 38
        name: 'Sliced bell pepper',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 39
        name: 'Provolone cheese',
        createdAt: new Date(),
        updatedAt: new Date(),
      },{ // 40
        name: 'Cilantro',
        createdAt: new Date(),
        updatedAt: new Date(),
      }], {});
  },

  down: (queryInterface, Sequelize) => {
      // return queryInterface.bulkDelete('Condiments', null, {});
  }
};
