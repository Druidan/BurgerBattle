module.exports = function(sequelize, DataTypes) {
  //-----------------

  const Burgers = sequelize.define("Burgers", {
    name: DataTypes.STRING,
    specialNotes: {
      type: DataTypes.STRING,
      allowNull: true
    },
    score: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    picURL: DataTypes.STRING
  });
  //-----------------

  Burgers.associate = models => {
    Burgers.belongsToMany(models.Condiments, {
      through: "burgerCondiments",
      as: "Condiments",
      foreignKey: "burgerId"
    });
    Burgers.belongsToMany(models.Breads, {
      through: "burgerBreads",
      as: "Breads",
      foreignKey: "burgerId"
    });
    // Burgers.belongsToMany(models.Meats, {
    //   through: "burgerMeaties",
    //   as: "Meats",
    //   foreignKey: "burgerId"
    // });
  };
  //-----------------

  // Burgers.associate = (models) => {
  //     Burgers.hasMany(models.Condiments);
  //     Burgers.hasMany(models.Breads);
  //     Burgers.hasMany(models.Meats);
  // };
  //-----------------

  return Burgers;
};

// *********************************************************************************
