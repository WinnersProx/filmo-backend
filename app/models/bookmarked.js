'use strict';
module.exports = (sequelize, DataTypes) => {
  const Bookmarked = sequelize.define('Bookmarked', {
    bookmark_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER
  }, {});
  Bookmarked.associate = function(models) {
    // associations can be defined here
  };
  return Bookmarked;
};
