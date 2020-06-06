'use strict';
module.exports = (sequelize, DataTypes) => {
  const Empleado = sequelize.define('Empleado', {
    cargo: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    fechaIngreso: DataTypes.DATE,
    salario: DataTypes.FLOAT,
    idSucursal: DataTypes.INTEGER
  }, {});
  Empleado.associate = function(models) {
    Empleado.hasMany(models.PagoNomina, {
      foreignKey : "idEmpleado",
      as : "PagoNomina"
    });
    Empleado.belongsTo(models.Sucursal);
  };
  return Empleado;
};