'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('Stories', [{
      // userId: '1',
      // title: 'Putin Reconsiders',
      // content: `An anonymous source in the Kremlin says Vladimir Putin regrets his decision to invade Ukraine in a desperate attempt to impress Beijing. But the source says Putin's advisers did not offer him a full explanation for the decision. A Putin ally in the Kremlin, Dmitri Peskov, says it is impossible to pin down why Putin changed his mind. He said Russia's diplomatic and intelligence service are still preparing a new explanation, but Peskov said Putin is unlikely to give one before the United States holds elections in November. And Putin may be reluctant to put a face to the explanation.`,
      // createdAt: new Date(),
      // updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkDelete('Stories', null, {});
  }
};
