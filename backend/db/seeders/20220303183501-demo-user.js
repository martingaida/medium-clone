'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'demo@demo.io',
        username: 'DemoLitionMan',
        hashedPassword: bcrypt.hashSync('1234')
      },
      {
        email: 'connor@sky.net',
        username: 'TermiNator',
        hashedPassword: bcrypt.hashSync('t800')
      },
      {
        email: 'liquidAtor@drop.io',
        username: 'LiquidA',
        hashedPassword: bcrypt.hashSync('eraser')
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      username: { [Op.in]: ['DemoLitionMan'] }
    }, {})
  }
};