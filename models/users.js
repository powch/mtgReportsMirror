module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    fbId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },

    userName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  User.associate = models => {
    User.hasMany(models.Report, {
      allowNull: true
    });
  };
  return User;
}