'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subscriptions = sequelize.define('Subscriptions', {
    subscription_id: DataTypes.INTEGER,
    subscription_type: DataTypes.STRING,
    subscription_amount: DataTypes.INTEGER
  }, {});
  Subscriptions.associate = function(models) {
    // associations can be defined here
  };
  return Subscriptions;
};
