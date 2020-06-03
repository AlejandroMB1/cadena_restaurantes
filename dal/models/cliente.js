'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cliente = sequelize.define('Cliente', {
    idPlatoFavorito: DataTypes.INTEGER,
    fechaNacimiento: DataTypes.DATE,
    idUsuario: DataTypes.INTEGER
  }, {});
  Cliente.associate = function(models) {
    Cliente.belongsTo(models.Usuario);
    Cliente.hasMany(models.Factura, {
      foreignKey : "idCliente",
      as : "Factura"
    });
    Cliente.belongsTo(models.Plato);
  };
  return Cliente;
};