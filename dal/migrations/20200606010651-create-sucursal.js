'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Sucursal', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      redSocial: {
        type: Sequelize.STRING
      },
      idCadenaRestaurante: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'CadenaRestaurante',
          key: 'id'
        }
      },
      idCiudad: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'Ciudad',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Sucursal');
  }
};