'use strict';
module.exports = (sequelize, DataTypes) => {
  const PagoNomina = sequelize.define('PagoNomina', {
    fechaPago: DataTypes.DATE,
    valor: DataTypes.FLOAT,
    idEmpleado: DataTypes.INTEGER
  }, {});
  PagoNomina.associate = function(models) {
    PagoNomina.belongsTo(models.Empleado);
  };
  return PagoNomina;
};