'use strict';
module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define('Menu', {
    nombre: DataTypes.STRING,
    fechaCreacion: DataTypes.DATE
  }, {});
  Menu.associate = function(models) {
    Menu.belongsToMany(models.Plato, {
      through: "MenuXPlato",
      as: "Plato",
      foreignKey : "idMenu"
    });
  };
  return Menu;
};