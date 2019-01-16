module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define('Report', {
    format: {
      type: DataTypes.STRING,
      allowNull: false
    },
    event: {
      type: DataTypes.STRING,
      allowNull: true
    },
    deck: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Report.associate = models => {
    Report.hasMany(models.Round);
    Report.belongsTo(models.User, { foreignKey: { allowNull: true } });
  };
  return Report;
};
