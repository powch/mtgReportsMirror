module.exports = function(sequelize, DataTypes) {
  var sideboardRecommendation = sequelize.define('sideboardRecommendation', {
    sideboardRecommendation: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  sideboardRecommendation.associate = models => {
    sideboardRecommendation.belongsTo(models.Round, { foreignKey: { allowNull: false } });
  };
  return sideboardRecommendation;
};
