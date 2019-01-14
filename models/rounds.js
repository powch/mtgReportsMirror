module.exports = (sequelize, DataTypes) => {
  var YelpReview = sequelize.define('YelpReview', {
    opponentDeck: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    result: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT
    }
  });

  YelpReview.associate = models => {
    // We're saying that a YelpReview should belong to an FoodTruck
    // A YelpReview can't be created without an FoodTruck due to the foreign key constraint
    YelpReview.belongsTo(models.FoodTruck, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return YelpReview;
};
