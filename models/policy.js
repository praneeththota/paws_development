'use strict';
const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://postgres:root@localhost:5432/paws_development');
var options = {
  User: 'user',
};
var PaperTrail = require('sequelize-paper-trail').init(sequelize, options);
PaperTrail.defineModels({});
module.exports = (sequelize, DataTypes) => {
  const policy = sequelize.define('policy', {
    name: DataTypes.STRING,
    document_type: DataTypes.STRING,
    author_id: DataTypes.STRING,
    values: DataTypes.JSON,
    is_active: DataTypes.BOOLEAN,
    updated_by: DataTypes.STRING
  }, {});
  policy.Revisions = policy.hasPaperTrail();
  policy.associate = function(models) {
    // associations can be defined here
  };
  return policy;
};