'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
  
    return queryInterface.bulkInsert('Likes', [{
      // userId: '2',
      // storyId: '1',
      // createdAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Likes', null, {});
  }
};
