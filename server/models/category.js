'use strict';
module.exports = (sequelize, DataTypes) => {
  var Category = sequelize.define('Category', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Skill, {through :'SkillCategories'})
  };
  return Category;
};
