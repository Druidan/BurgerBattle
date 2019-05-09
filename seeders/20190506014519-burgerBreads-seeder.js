'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerBreads', [{ // Standard 50/50
            burger_id: 1,
            bread_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ // 50/50 Kangaroo Burger
            burger_id: 2,
            bread_id: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ // Carolina Burger
            burger_id: 3,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{ 
            burger_id: 3,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 4,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 4,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 5,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 5,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 6,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 6,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 7,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 7,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 8,
            bread_id: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 9,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 9,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 10,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 10,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 11,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 11,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 12,
            bread_id: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 13,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 13,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 14,
            bread_id: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 15,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 15,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 16,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 17,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 17,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 18,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 18,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 19,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 19,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 20,
            bread_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 21,
            bread_id: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 22,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 22,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 23,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 23,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 24,
            bread_id: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 25,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 25,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 26,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 26,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 27,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 27,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 28,
            bread_id: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burger_id: 28,
            bread_id: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});

    },

    down: (queryInterface, Sequelize) => {
        // return queryInterface.bulkDelete('Burgers', null, {});
    }
};