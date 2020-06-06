'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('FacturaXPlato', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idFactura: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'Factura',
          key: 'id'
        }
      },
      idPlato: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references:  {
          model: 'Plato',
          key: 'id'
        }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('FacturaXPlato');
  }
};