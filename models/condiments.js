module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Condiments = sequelize.define('Condiments', {
        name: DataTypes.STRING,
    });
    //-----------------

    Condiments.associate = (models) => {
        Condiments.belongsToMany(models.Burgers, {
            through: 'burgerCondiments',
            foreignKey: 'condiment_id'
        });
    };
    //-----------------

    return Condiments;
};

// *********************************************************************************