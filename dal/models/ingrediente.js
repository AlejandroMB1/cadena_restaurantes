'use strict';
module.exports = (sequelize, DataTypes) => {
  const Ingrediente = sequelize.define('Ingrediente', {
    nombre: DataTypes.STRING,
    medida: DataTypes.FLOAT
  }, {});
  Ingrediente.associate = function(models) {
    Ingrediente.belongsToMany(models.Plato, {
      through: "PlatoXIngrediente",
      as: "Plato",
      foreignKey : "idIngrediente"
    });
  };
  return Ingrediente;
};