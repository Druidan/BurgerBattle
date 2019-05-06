module.exports = function (sequelize, DataTypes) {
    //-----------------

    const burgerMeaties = sequelize.define('burgerMeaties', {
        trueBurgerId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Burgers',
                key: 'id'
            }
        },
        meatId:{
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'Meats',
                key: 'id'
            }
        }
    });
    //-----------------


    return burgerMeaties;
};

// *********************************************************************************