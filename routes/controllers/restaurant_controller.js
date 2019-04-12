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
});

router.post('/create', (req, res) => {
  restaurant.create({ ...req.body, rating: +req.body.rating, createdAt: new Date(), updatedAt: new Date() })
    .then(restaurant => {
      console.log('[INFO] Created Restaurant Successfully!');
      res.redirect('/restaurants');
    })
});

router.get('/update/:id', (req, res) => {
  restaurant.findByPk(req.params.id).then(restaurant => {
    res.render('restaurants/update_restaurant', { restaurant });
  });
});

router.put('/update/:id', (req, res) => {
  restaurant.findByPk(req.params.id).then(rest => {
    rest.update({ ...req.body, createdAt: new Date(), updatedAt: new Date() })
    .then(updatedRestaurant => {
        res.redirect('/restaurants');
    });
  });
});

module.exports = router;
