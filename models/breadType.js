module.exports = function (sequelize, DataTypes) {
    //-----------------

    const Breads = sequelize.define('Breads', {
        name: DataTypes.STRING,
    });
    //-----------------

    Breads.associate = (models) => {
        Breads.belongsToMany(models.Burgers, {
            through: 'burgerBreads',
            as: 'Burgers',
            foreignKey: 'breadId',
            // onDelete: 'cascade'
        });
    };
    //-----------------

    return Breads;
};

// *********************************************************************************