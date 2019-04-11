'use strict';
module.exports = (sequelize, DataTypes) => {
  const restaurant = sequelize.define('restaurant', {
    name: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    zipCode: DataTypes.STRING,
    typeOfFood: DataTypes.STRING,
    rating: DataTypes.INTEGER,
    yelpUrl: DataTypes.STRING
  }, {});
  restaurant.associate = function(models) {
    // associations can be defined here
  };
  return restaurant;
};
