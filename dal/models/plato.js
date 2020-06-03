'use strict';
module.exports = (sequelize, DataTypes) => {
  const Plato = sequelize.define('Plato', {
    nombre: DataTypes.STRING,
    valor: DataTypes.FLOAT,
    descripcion: DataTypes.TEXT
  }, {});
  Plato.associate = function(models) {
    Plato.belongsToMany(models.Menu, {
      through: "MenuXPlato",
      as: "Menu",
      foreignKey : "idPlato"
    });
  };
  return Plato;
};