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
      foreignKey: "burger_id"
    });
    Burgers.belongsToMany(models.Breads, {
      through: "burgerBreads",
      foreignKey: "burger_id"
    });
    Burgers.belongsToMany(models.Meats, {
      through: "burgerMeats",
      foreignKey: "burger_id"
    });
  };
  //-----------------

  return Burgers;
};

// *********************************************************************************
