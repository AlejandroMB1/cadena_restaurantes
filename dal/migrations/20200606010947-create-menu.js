'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Menu', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      fechaCreacion: {
        type: Sequelize.DATE
      },
      idCadenaRestaurante: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'CadenaRestaurante',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Menu');
  }
};