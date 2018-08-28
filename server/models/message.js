'use strict';
module.exports = (sequelize, DataTypes) => {
  var Message = sequelize.define('Message', {
    context: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    sender: {
      type: DataTypes.STRING,
      allowNull: false
    },
    receiver: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Message.associate = function(models) {
    Message.belongsTo(models.User)
  };
  return Message;
};
