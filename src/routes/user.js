const express = require('express')
const router = express.Router()

const user = require("../controllers/userController")

router.post('/register', user.createUser)

router.get('/list', user.getUsers)


module.exports = router