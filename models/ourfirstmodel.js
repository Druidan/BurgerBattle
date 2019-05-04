

module.exports = function (sequelize, DataTypes) {
    //-----------------

    const OurFirstModel = sequelize.define('OurFirstModel', {
        name: DataTypes.STRING
    });
    //-----------------

    OurFirstModel.associate = function (models) {
        OurFirstModel.hasMany(models.OurSecondModel, {
            onDelete: 'cascade'
        });
    };
    //-----------------

    return OurFirstModel;
};

// *********************************************************************************