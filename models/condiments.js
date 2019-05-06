module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Condiments = sequelize.define('Condiments', {
        name: DataTypes.STRING,
    });
    //-----------------

    Condiments.associate = (models) => {
        Condiments.belongsToMany(models.Burgers, {
            through: 'burgerCondiments',
            as: 'Burgers',
            foreignKey: 'condimentId',
            // onDelete: 'cascade'
        });
    };
    //-----------------

    return Condiments;
};

// *********************************************************************************