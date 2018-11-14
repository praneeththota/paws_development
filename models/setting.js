'use strict';
module.exports = (sequelize, DataTypes) => {
  const Setting = sequelize.define('Setting', {
    name: DataTypes.STRING,
    data: DataTypes.JSON,
  },{});
  Setting.associate = function(models) {
    // associations can be defined here
  };
  return Setting;
};