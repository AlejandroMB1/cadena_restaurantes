'use strict';
module.exports = (sequelize, DataTypes) => {
  const PedidoXPlato = sequelize.define('PedidoXPlato', {
    idPedido: DataTypes.INTEGER,
    idPlato: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER
  }, {});
  PedidoXPlato.associate = function(models) {
    // associations can be defined here
  };
  return PedidoXPlato;
};