'use strict';
module.exports = (sequelize, DataTypes) => {
  const FacturaXPlato = sequelize.define('FacturaXPlato', {
    idFactura: DataTypes.INTEGER,
    idPlato: DataTypes.INTEGER
  }, {});
  FacturaXPlato.associate = function(models) {
    // associations can be defined here
  };
  return FacturaXPlato;
};