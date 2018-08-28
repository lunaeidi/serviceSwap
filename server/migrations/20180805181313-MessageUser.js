'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('Messages', ['sender'], {
      type: 'foreign key',
      name: 'MessageUser',
      references: {
        table: 'Users',
        field: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    })
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraint('Messages', 'MessageUser')
  }
};
