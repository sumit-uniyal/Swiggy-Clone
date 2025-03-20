const express = require('express')
const router = express.Router()
const AuthController = require('../Controllers/AuthController')

router.route('/login').post(AuthController.login)

module.exports = router