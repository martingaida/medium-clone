'use strict';

const bcrypt = require('bcryptjs');

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'admin@admin.io',
        username: 'admin',
        hashedPassword: bcrypt.hashSync('seleniumHex88'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'demo@demo.io',
        username: 'DemoLitionMan',
        hashedPassword: bcrypt.hashSync('123456'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'connor@sky.net',
        username: 'TermiNator',
        hashedPassword: bcrypt.hashSync('t800t800'),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        email: 'liquidAtor@drop.io',
        username: 'LiquidA',
        hashedPassword: bcrypt.hashSync('eraser'),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    // const Op = Sequelize.Op;
    return queryInterface.bulkDelete('Users', {
      // username: { [Op.in]: ['DemoLitionMan'] }
    }, {})
  }
};