module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Meats = sequelize.define('Meats', {
        name: DataTypes.STRING,
    });
    //-----------------

    Meats.associate = (models) => {
        Meats.belongsToMany(models.Burgers, {
            through: 'burgerMeats',
            foreignKey: 'meat_id'
        });
    };
    //-----------------

    return Meats;
};

// *********************************************************************************