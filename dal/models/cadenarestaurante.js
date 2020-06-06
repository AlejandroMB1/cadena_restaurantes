'use strict';
module.exports = (sequelize, DataTypes) => {
  const CadenaRestaurante = sequelize.define('CadenaRestaurante', {
    nombre: DataTypes.STRING,
    nombreCEO: DataTypes.STRING
  }, {});
  CadenaRestaurante.associate = function(models) {
    CadenaRestaurante.hasMany(models.Sucursal, {
      foreignKey: "idCadenaRestaurante",
      as: "Sucursal"
    });
    CadenaRestaurante.hasMany(models.Menu, {
      foreignKey: "idCadenaRestaurante",
      as: "Menu"
    });
  };
  return cadenaRestaurante;
};