'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuXPlato = sequelize.define('MenuXPlato', {
    idMenu: DataTypes.INTEGER,
    idPlato: DataTypes.INTEGER
  }, {});
  MenuXPlato.associate = function(models) {
    // associations can be defined here
  };
  return MenuXPlato;
};