const express = require("express")
const router = express.Router()
// const { verifyToken, onlyAdmin } = require("../controllers/authMiddleware")
const { getUsers, getUser } = require("../controllers/usersController")

router.get("/", verifyToken, onlyAdmin, getUsers)

router.get("/myself", verifyToken, getUser)

module.exports = router