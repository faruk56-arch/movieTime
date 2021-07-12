const express = require("express")
const router = express.Router()
const {
    getGenre,
    addGenre,
    deleteGenre
} = require("../controllers/genreController")

router.get("/", getGenre)

router.post("/", addGenre)

router.delete("/:id", deleteGenre)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
