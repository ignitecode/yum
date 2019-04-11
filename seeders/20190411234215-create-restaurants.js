'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('restaurants', [{
      name: 'McDonalds',
      city: 'Orlando',
      state: 'Florida',
      zipCode: '32246',
      typeOfFood: 'Fast',
      rating: 2,
      yelpUrl: 'https://yelp.com/mcdonalds',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Olive Garden',
      city: 'Small Town',
      state: 'Ohio',
      zipCode: '32246',
      typeOfFood: 'Italian',
      rating: 5,
      yelpUrl: 'https://yelp.com/olive-garden',
      createdAt: new Date(),
      updatedAt: new Date(),
    }])
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('restaurants', null, {});
  }
};
