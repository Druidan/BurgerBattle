'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerMeats', [{
            burger_id: 1,
            meat_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 2,
            meat_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 3,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 4,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{  // The Loaded Angus Steakhouse Burger
            burger_id: 5,
            meat_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 5,
            meat_id: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 6,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 7,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 8,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 9,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 10,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 11,
            meat_id: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 12,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ // The California Burger
            burger_id: 13,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 13,
            meat_id: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 14,
            meat_id: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 15,
            meat_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 16,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 17,
            meat_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 17,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 18,
            meat_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ // Curry Burger
            burger_id: 19,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 19,
            meat_id: 14,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 19,
            meat_id: 15,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 20,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 21,
            meat_id: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 21,
            meat_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 22,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 22,
            meat_id: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 23,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 24,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 25,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ // Kimchi Burger
            burger_id: 26,
            meat_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 26,
            meat_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 27,
            meat_id: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 27,
            meat_id: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 28,
            meat_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 28,
            meat_id: 16,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});

    },

    down: (queryInterface, Sequelize) => {
        // return queryInterface.bulkDelete('Burgers', null, {});
    }
};