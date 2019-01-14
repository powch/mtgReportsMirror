module.exports = (sequelize, DataTypes) => {
  var Report = sequelize.define("Report", {
    name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: true
    },
    url: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });
  Report.associate = models => {
    Report.hasMany(models.Round);
  };
  return Report;
};
