'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ciudad = sequelize.define('Ciudad', {
    nombre: DataTypes.STRING
  }, {});
  Ciudad.associate = function(models) {
    Ciudad.hasMany(models.Sucursal, {
      foreignKey: "idCiudad",
      as : "Sucursal"
    });
  };
  return Ciudad;
};