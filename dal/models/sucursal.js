'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sucursal = sequelize.define('Sucursal', {
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.STRING,
    redSocial: DataTypes.STRING,
    idCadenaRestaurante: DataTypes.INTEGER,
    idCiudad: DataTypes.INTEGER
  }, {});
  Sucursal.associate = function(models) {
    Sucursal.belongsTo(models.Ciudad);
    Sucursal.belongsTo(models.CadenaRestaurante);
    Sucursal.hasMany(models.Empleado, {
      foreignKey : "idSucursal",
      as : "Empleado"
    });
  };
  return Sucursal;
};