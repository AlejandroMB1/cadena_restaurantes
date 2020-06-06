'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    nombre: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE,
    idCadenaRestaurante : DataTypes.INTEGER
  }, {});
  Menu.associate = function(models) {
    Menu.belongsToMany(models.Plato, {
      through: "MenuXPlato",
      as: "Plato",
      foreignKey : "idMenu"
    });
    Menu.belongsTo(models.CadenaRestaurante);
  };
  return Menu;
};