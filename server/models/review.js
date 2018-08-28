'use strict';
module.exports = (sequelize, DataTypes) => {
  var Review = sequelize.define('Review', {
    context: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    creator: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Review.associate = function(models) {
    Review.belongsTo(models.User)
  };
  return Review;
};
