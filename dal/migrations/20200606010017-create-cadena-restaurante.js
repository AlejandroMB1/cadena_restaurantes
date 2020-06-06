'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('CadenaRestaurante', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      nombreCEO: {
        type: Sequelize.STRING
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('CadenaRestaurante');
  }
};