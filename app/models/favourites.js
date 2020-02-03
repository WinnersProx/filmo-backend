'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favourites = sequelize.define('Favourites', {
    favourites_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  Favourites.associate = function(models) {
    // associations can be defined here
  };
  return Favourites;
};
