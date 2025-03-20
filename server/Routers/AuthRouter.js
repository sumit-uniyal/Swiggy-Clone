const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/AuthController')

router.route('/login').get(AuthController.login)

module.exports = router