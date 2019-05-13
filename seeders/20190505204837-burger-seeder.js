'use strict';

// This seeder file will populate the core burger table.

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Burgers', [{
      // 1
      name: '50/50 Burger',
      specialNotes: null,
      picURL: './assets/images/50-50burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 2
      name: '50/50 Kangaroo Burger',
      specialNotes: null,
      picURL: './assets/images/50-50burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 3
      name: 'Carolina Burger',
      specialNotes: null,
      picURL: './assets/images/carolinaburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 4
      name: 'Teriyaki Burger',
      specialNotes: null,
      picURL: './assets/images/teriyakiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 5
      name: 'Loaded Angus Steakhouse Burger',
      specialNotes: null,
      picURL: './assets/images/loadedsteakhouseburger.gif',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 6
      name: 'Wisconsin Butter Burger',
      specialNotes: 'Every part of the burger, from the onions, to the meat patty, to the bun, is cooked in butter on a stove top.',
      picURL: './assets/images/butterburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 7
      name: 'Classic Cheese Burger',
      specialNotes: "The cheese of a cheeseburger is usually laid atop the patty as it cooks near the end of the process so that the cheese can melt onto the patty. While American Cheese is typical, a wide variety of cheeses can be added to a cheeseburger.",
      picURL: './assets/images/cheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 8
      name: 'Luther Burger',
      specialNotes: "While the Luther Burger is not very unlike a classic cheeseburger on the inside, with this burger its what's on the outside that counts - two halves of a glazed doghnut.",
      picURL: './assets/images/lutherburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 9
      name: 'Australasian Burger',
      specialNotes: null,
      picURL: './assets/images/aussieburger.jpeg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 10
      name: 'Chili Burger',
      specialNotes: "This burger is also sometimes served open-faced and eaten with a knife and fork.",
      picURL: './assets/images/chiliburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 11
      name: 'Buffalo Burger',
      specialNotes: null,
      picURL: './assets/images/buffaloburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 12
      name: 'Bøfsandwich',
      specialNotes: "The classic Danish take on a hamburger.",
      picURL: './assets/images/danish-beef-burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 13
      name: 'California Burger',
      specialNotes: null,
      picURL: './assets/images/californiaburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 14
      name: 'Hamdog',
      specialNotes: "A combination of hotdog and burger, with the meat deep-fried, first made in Australia.",
      picURL: './assets/images/hamdog.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 15
      name: 'Slugburger',
      specialNotes: null,
      picURL: './assets/images/slugburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 16
      name: 'Slopper',
      specialNotes: "Served open-faced and slathered in sauce and cheese, it is recomended that you eat it with a knife and fork or spoon.",
      picURL: './assets/images/slopper.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 17
      name: 'BBQ Burger',
      specialNotes: null,
      picURL: './assets/images/bbqcheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 18
      name: 'Salmon Burger',
      specialNotes: null,
      picURL: './assets/images/salmonburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 19
      name: 'Curry Burger',
      specialNotes: null,
      picURL: './assets/images/curryburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 20
      name: 'Rice Burger',
      specialNotes: null,
      picURL: './assets/images/riceburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 21
      name: 'Rice Burger (Korean Variant)',
      specialNotes: null,
      picURL: './assets/images/Koreanriceburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 22
      name: 'Bacon Cheese Burger',
      specialNotes: null,
      picURL: './assets/images/baconcheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 23
      name: 'Hawaii Burger',
      specialNotes: null,
      picURL: './assets/images/hawaiiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 24
      name: 'Naan Burger',
      specialNotes: null,
      picURL: './assets/images/naanburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 25
      name: 'Jucy Lucy',
      specialNotes: "This burger's main claim to fame is that the cheese is actually inside the meat.",
      picURL: './assets/images/jucylucy.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 26
      name: 'Kimchi Burger',
      specialNotes: null,
      picURL: './assets/images/kimchiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 27
      name: 'Veggie Burger',
      specialNotes: null,
      picURL: './assets/images/veggie.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, { // 28
      name: 'Classic Steak Burger',
      specialNotes: null,
      picURL: './assets/images/steakburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, ], {});

  },

  down: (queryInterface, Sequelize) => {
    // return queryInterface.bulkDelete('Burgers', null, {});
  }
};