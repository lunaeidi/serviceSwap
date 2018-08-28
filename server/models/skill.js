'use strict';
module.exports = (sequelize, DataTypes) => {
  var Skill = sequelize.define('Skill', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    wantOrOffer: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Skill.associate = function(models) {
    Skill.belongsTo(models.User)
    Skill.belongsToMany(models.Category, {through: 'SkillCategories'})
  };
  return Skill;
};
