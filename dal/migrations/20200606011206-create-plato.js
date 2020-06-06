'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plato', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      valor: {
        type: Sequelize.FLOAT
      },
      descripcion: {
        type: Sequelize.TEXT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Plato');
  }
};