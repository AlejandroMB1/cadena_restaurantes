'use strict';
module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    nombre: DataTypes.STRING
  }, {});
  Rol.associate = function(models) {
    Rol.hasMany(models.Usuario, {
      foreignKey : "idRol",
      as : "Usuario"
    });
  };
  return Rol;
};