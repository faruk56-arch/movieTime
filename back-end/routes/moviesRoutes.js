const express = require("express")
const router = express.Router()
const {
    get10Movies,
    getAllMovies,
    getMovie,
    addMovie
} = require("../controllers/movieController")
const { validationMovies } = require("../middlewares/validationsMiddlewares")


router.get("/", getAllMovies)

router.get("/10", get10Movies)

router.get("/:title", getMovie)

router.post("/",validationMovies, addMovie)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
