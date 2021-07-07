const express = require("express")
const router = express.Router()
const { signup, login } = require("../controllers/authController")

router.post("/signup",validationSignup, signup)

router.post("/login",validationLogin, login)

module.exports = router