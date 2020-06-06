'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Empleado', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cargo: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      fechaIngreso: {
        type: Sequelize.DATE
      },
      salario: {
        type: Sequelize.FLOAT
      },
      idSucursal: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'Sucursal',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Empleado');
  }
};