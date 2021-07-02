const express = require("express")
const router = express.Router()
const {
    getMovies,
    getMovie,
    addMovie
} = require("../controllers/movieController")
const { validationMovies } = require("../middlewares/validationsMiddlewares")


router.get("/", getMovies)

router.get("/:name", getMovie)

router.post("/",validationMovies, addMovie)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
