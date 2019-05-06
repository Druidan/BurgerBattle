'use strict';
var Promise = require("bluebird");

module.exports = {
    up: (queryInterface, Sequelize) => {
        const sequelize = queryInterface.sequelize;
        return Promise.all([
            sequelize.query('SELECT id FROM Burgers', {
                type: sequelize.QueryTypes.SELECT
            }),
            sequelize.query('SELECT id FROM Condiments', {
                type: sequelize.QueryTypes.SELECT
            }),
        ]).spread((burgerids, condimentsids) => {
            let burgermakermaster = [];
            burgerids.forEach(burgerId => {
                condimentsids.forEach(condimentId => {
                    burgermakermaster.push({
                        burgerId: burgerId.id,
                        condimentId: condimentId.id,
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    });
                });
            });
            return queryInterface.bulkInsert('BurgerCondiments', burgermakermaster, {});
        })
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('BurgerCondiments', null, {});
    }
};