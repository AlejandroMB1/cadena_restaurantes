'use strict';
module.exports = (sequelize, DataTypes) => {
  const Factura = sequelize.define('Factura', {
    idEmpleado: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    idCliente: DataTypes.INTEGER,
    descuento: DataTypes.FLOAT,
    valorTotal: DataTypes.FLOAT
  }, {});
  Factura.associate = function(models) {
    Factura.belongsTo(models.Cliente);
    Factura.belongsToMany(models.Platos, {
      through: "FacturaXPlato",
      as: "Plato",
      foreignKey : "idPlato"
    });
  };
  return Factura;
};