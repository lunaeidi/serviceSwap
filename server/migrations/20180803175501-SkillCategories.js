'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'SkillCategories',
      {
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        skillId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        },
        categoryId: {
          type: Sequelize.INTEGER,
          primaryKey: true
        }
      }
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('SkillCategories')
  }
};
