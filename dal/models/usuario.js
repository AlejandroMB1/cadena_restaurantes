'use strict';
module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombres: DataTypes.STRING,
    apellidos: DataTypes.STRING,
    correo: DataTypes.STRING,
    contrasena: DataTypes.STRING,
    idRol: DataTypes.INTEGER
  }, {});
  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Rol);
    Usuario.hasOne(models.Cliente, {
      foreignKey : "idUsuario",
      as : "Cliente"
    }); 
  };
  return Usuario;
};