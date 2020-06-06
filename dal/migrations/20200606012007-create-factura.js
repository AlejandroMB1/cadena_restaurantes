'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Factura', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idEmpleado: {
        type: Sequelize.INTEGER
      },
      fecha: {
        type: Sequelize.DATE
      },
      nombreCliente: {
        type: Sequelize.STRING
      },
      cedula: {
        type: Sequelize.STRING
      },
      descuento: {
        type: Sequelize.FLOAT
      },
      valorTotal: {
        type: Sequelize.FLOAT
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Factura');
  }
};