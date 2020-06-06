'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PagoNomina', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fechaPago: {
        type: Sequelize.DATE
      },
      valor: {
        type: Sequelize.FLOAT
      },
      idEmpleado: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'Empleado',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PagoNomina');
  }
};