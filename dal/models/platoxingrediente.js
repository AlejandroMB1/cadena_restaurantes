'use strict';
module.exports = (sequelize, DataTypes) => {
  const PlatoXIngrediente = sequelize.define('PlatoXIngrediente', {
    idIngrediente: DataTypes.INTEGER,
    idPlato: DataTypes.INTEGER
  }, {});
  PlatoXIngrediente.associate = function(models) {
    // associations can be defined here
  };
  return PlatoXIngrediente;
};