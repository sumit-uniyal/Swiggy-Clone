const express = require('express')
const router = express.Router()
const RestaurantController = require('../Controllers/RestaurantController')

router.route('/add').post(RestaurantController.createRestaurant);
router.route('/get-all').get(RestaurantController.getRestaurants);

module.exports = router