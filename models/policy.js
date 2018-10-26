'use strict';
module.exports = (sequelize, DataTypes) => {
  const policy = sequelize.define('policy', {
    name: DataTypes.STRING,
    document_type: DataTypes.STRING,
    author_id: DataTypes.STRING,
    values: DataTypes.JSON,
    is_active: DataTypes.BOOLEAN,
    updated_by: DataTypes.STRING
  }, {});
  policy.associate = function(models) {
    // associations can be defined here
  };
  return policy;
};