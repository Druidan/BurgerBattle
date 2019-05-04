

module.exports = function (sequelize, DataTypes) {
    //-----------------

    const burger = sequelize.define('burger', {
        name: DataTypes.STRING,
        aliases: DataTypes.STRING,
        bun: DataTypes.STRING,
        patty: DataTypes.STRING,
        condiments: DataTypes.STRING,
        score: DataTypes.INTEGER,
    });
    //-----------------

    // OurFirstModel.associate = function (models) {
    //     OurFirstModel.hasMany(models.OurSecondModel, {
    //         onDelete: 'cascade'
    //     });
    // };
    //-----------------

    return burger;
};

// *********************************************************************************