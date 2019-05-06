'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {

        return queryInterface.bulkInsert('burgerBreads', [{
            burgerId: 1,
            breadId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 2,
            breadId: 2,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 3,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 3,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 4,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 4,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 5,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 5,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 6,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 6,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 7,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 7,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 8,
            breadId: 7,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 9,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 9,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 10,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 10,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 11,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 11,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 12,
            breadId: 9,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 13,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 13,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 14,
            breadId: 4,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 15,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 15,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 16,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 17,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 17,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 18,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 18,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 19,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 19,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 20,
            breadId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 21,
            breadId: 6,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 22,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 22,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 23,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 23,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 24,
            breadId: 8,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 25,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 25,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 26,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 26,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 27,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 27,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 28,
            breadId: 1,
            createdAt: new Date(),
            updatedAt: new Date(),
        },{
            burgerId: 28,
            breadId: 3,
            createdAt: new Date(),
            updatedAt: new Date(),
        },], {});

    },

    down: (queryInterface, Sequelize) => {
        // return queryInterface.bulkDelete('Burgers', null, {});
    }
};