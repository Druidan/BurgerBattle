'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerMeaties', [{
            trueBurgerId: 1,
            meatId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 2,
            meatId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 3,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 4,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 5,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 6,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 7,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 8,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 9,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 10,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 11,
            meatId: 5,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 12,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 13,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 14,
            meatId: 12,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 15,
            meatId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 16,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 17,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 17,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 18,
            meatId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 19,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 20,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 21,
            meatId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 21,
            meatId: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 22,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 22,
            meatId: 13,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 23,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 24,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 25,
            meatId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 26,
            meatId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 26,
            meatId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 27,
            meatId: 10,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 27,
            meatId: 11,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            trueBurgerId: 28,
            meatId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});

    },

    down: (queryInterface, Sequelize) => {
        // return queryInterface.bulkDelete('Burgers', null, {});
    }
};