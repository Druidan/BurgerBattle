module.exports = function (sequelize, DataTypes) {
    //-----------------

    // const burgerBreads = sequelize.define('burgerBreads', {
    //     burgerId: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         references: {
    //             model: 'Burgers',
    //             key: 'id'
    //         }
    //     },
    //     breadId: {
    //         type: DataTypes.INTEGER,
    //         allowNull: false,
    //         references: {
    //             model: 'Breads',
    //             key: 'id'
    //         }
    //     },
    // });
    //-----------------

    const burgerBreads = sequelize.define('burgerBreads', {

    });
    
    return burgerBreads;
};

// *********************************************************************************