'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define('Pedido', {
    idEmpleado: DataTypes.INTEGER,
    fecha: DataTypes.DATE
  }, {});
  Pedido.associate = function(models) {
    Pedido.belongsTo(models.Empleado);
    Plato.belongsToMany(models.Plato, {
      through: "PedidoXPlato",
      as: "Plato",
      foreignKey : "idPedido"
    });
  };
  return Pedido;
};