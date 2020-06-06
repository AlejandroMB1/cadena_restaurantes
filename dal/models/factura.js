'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    idEmpleado: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    nombreCliente: DataTypes.STRING,
    cedula: DataTypes.STRING,
    descuento: DataTypes.FLOAT,
    valorTotal: DataTypes.FLOAT
  }, {});
  Factura.associate = function(models) {
    Factura.belongsToMany(models.Platos, {
      through: "FacturaXPlato",
      as: "Plato",
      foreignKey : "idPlato"
    });
  };
  return Factura;
};