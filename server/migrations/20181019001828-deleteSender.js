'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn(
      'Messages',
      'sender'
    )
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'Messages',
      'sender'
    )
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
