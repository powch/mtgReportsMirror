module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fbId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },

    profilePic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  });
  User.associate = models => {
    User.hasMany(models.Report);
  };
  return User;
}