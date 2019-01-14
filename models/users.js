module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    }
  });
  User.associate = models => {
    User.hasMany(models.Report);
  };
  return User;
}