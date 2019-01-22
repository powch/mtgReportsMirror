module.exports = (sequelize, DataTypes) => {
  var Round = sequelize.define('Round', {
    opponentDeck: {
      type: DataTypes.STRING,
      allowNull: false
    },
    result: {
      type: DataTypes.STRING,
      allowNull: false
    },
    notes: {
      type: DataTypes.TEXT
    }
  });

  Round.associate = models => {
    // We're saying that a Round should belong to an Report
    // A Round can't be created without an Report due to the foreign key constraint
    Round.belongsTo(models.Report, {
      foreignKey: {
        allowNull: false
      }
    });

    Round.hasMany(models.sideboardRecommendation);
  };

  return Round;
};
