'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
   
    return queryInterface.bulkInsert('Comments', [{
      // userId: '2',
      // storyId: '1',
      // content: 'Слава Україні!',
      // createdAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Comments', null, {});
  }
};
