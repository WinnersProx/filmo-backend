'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reviews = sequelize.define('Reviews', {
    review_id: DataTypes.INTEGER,
    movie_id: DataTypes.INTEGER,
    reviewer: DataTypes.INTEGER,
    review: DataTypes.STRING
  }, {});
  Reviews.associate = function(models) {
    // associations can be defined here
  };
  return Reviews;
};
