const express = require('express');
const router = express.Router();
const { restaurant } = require('../../models');

/* GET /restaurants */
router.get('/', (req, res) => {
  restaurant.findAll().then(restaurants => {
    res.render('restaurants/restaurants', { restaurants })
  });
});

router.get('/create', (req, res) => {
    res.render('restaurants/create_restaurant');
    // restaurant.create({ ...req.body, createdAt: new Date(), updatedAt: new Date() })
});

module.exports = router;
