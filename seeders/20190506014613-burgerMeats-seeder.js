'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerMeaties', [{
            burgerId: 1,
            meatId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 2,
            meatId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 3,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 4,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 5,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 6,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 7,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 8,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 9,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 10,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 11,
            meatId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 12,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 13,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 14,
            meatId: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 15,
            meatId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 16,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 17,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 17,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 18,
            meatId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 19,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 20,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 21,
            meatId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 21,
            meatId: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 22,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 22,
            meatId: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 23,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 24,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 25,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 26,
            meatId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 26,
            meatId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 27,
            meatId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 27,
            meatId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 28,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});

    },

    down: (queryInterface, Sequelize) => {
        // return queryInterface.bulkDelete('Burgers', null, {});
    }
};