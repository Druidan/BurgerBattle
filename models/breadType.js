module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Breads = sequelize.define('Breads', {
        name: DataTypes.STRING,
    });
    //-----------------

    Breads.associate = (models) => {
        Breads.belongsToMany(models.Burgers, {
            through: "burgerBreads",
            foreignKey: "bread_id"
        });    
    };
    //-----------------

    return Breads;
};

// *********************************************************************************