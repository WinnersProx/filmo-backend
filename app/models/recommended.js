'use strict';
module.exports = (sequelize, DataTypes) => {
  const Recommended = sequelize.define('Recommended', {
    rec_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  Recommended.associate = function(models) {
    // associations can be defined here
  };
  return Recommended;
};
