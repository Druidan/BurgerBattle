module.exports = function (sequelize, DataTypes) {
    //-----------------

    const burgerCondiments = sequelize.define('burgerCondiments', {
        burgerId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Burgers',
                key: 'id'
            }
        },
        condimentId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Condiments',
                key: 'id'
            }
        },
    });
    //-----------------


    return burgerCondiments;
};

// *********************************************************************************