'use strict';
module.exports = (sequelize, DataTypes) => {
  const Movies = sequelize.define('Movies', {
    movie_id: DataTypes.INTEGER,
    movie_title: DataTypes.STRING,
    movie_actor: DataTypes.STRING,
    release_date: DataTypes.DATE,
    movie_description: DataTypes.STRING,
    genre: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Movies.associate = function(models) {
    // associations can be defined here
  };
  return Movies;
};
