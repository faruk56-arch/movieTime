const express = require("express")
const router = express.Router()
const {
    getAdress,
    addAdress,
    deleteAdress
} = require("../controllers/adressController")

router.get("/", getAdress)

router.post("/", addAdress)

router.delete("/:id", deleteAdress)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
