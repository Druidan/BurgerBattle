'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Burgers', [{
      name: '50/50 Burger',
      specialNotes: null,
      picURL: './assets/images/50-50burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: '50/50 Kangaroo Burger',
      specialNotes: null,
      picURL: './assets/images/50-50burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Carolina Burger',
      specialNotes: null,
      picURL: './assets/images/carolinaburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Teriyaki Burger',
      specialNotes: null,
      picURL: './assets/images/teriyakiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'The Loaded Angus Steakhouse Burger',
      specialNotes: null,
      picURL: '',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'The Wisconsin Butter Burger',
      specialNotes: 'Every part of the burger is cooked in butter on a stove top.',
      picURL: './assets/images/butterburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Classic Cheese Burger',
      specialNotes: null,
      picURL: './assets/images/cheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Luther Burger',
      specialNotes: null,
      picURL: './assets/images/lutherburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Australasian Burger',
      specialNotes: null,
      picURL: './assets/images/aussieburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Chili Burger',
      specialNotes: null,
      picURL: './assets/images/chiliburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Buffalo Burger',
      specialNotes: null,
      picURL: './assets/images/buffaloburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Bøfsandwich',
      specialNotes: "The classic Danish take on a hamburger.",
      picURL: './assets/images/danish-beef-burger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'California Burger',
      specialNotes: null,
      picURL: './assets/images/californiaburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Hamdog',
      specialNotes: "A combination of hotdog and burger first made in Australia.",
      picURL: './assets/images/hamdog.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Slugburger',
      specialNotes: null,
      picURL: './assets/images/slugburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Slopper',
      specialNotes: "Served open-faced and slathered in sauce and cheese, it is recomended that you eat it with a knife and fork or spoon.",
      picURL: './assets/images/slopper.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'BBQ Burger',
      specialNotes: null,
      picURL: './assets/images/bbqcheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Salmon Burger',
      specialNotes: null,
      picURL: './assets/images/salmonburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Curry Burger',
      specialNotes: null,
      picURL: './assets/images/curryburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Rice Burger',
      specialNotes: null,
      picURL: './assets/images/riceburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Rice Burger (Korean Variant)',
      specialNotes: null,
      picURL: './assets/images/Koreanriceburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Bacon Cheese Burger',
      specialNotes: null,
      picURL: './assets/images/baconcheeseburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Hawaii Burger',
      specialNotes: null,
      picURL: './assets/images/hawaiiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Naan Burger',
      specialNotes: null,
      picURL: './assets/images/naanburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Jucy Lucy',
      specialNotes: "This burger's main claim to fame is that the cheese is actually inside the meat.",
      picURL: './assets/images/jucylucy.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Kimchi Burger',
      specialNotes: null,
      picURL: './assets/images/kimchiburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
      name: 'Veggie Burger',
      specialNotes: null,
      picURL: './assets/images/lutherburger.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
    }, {
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