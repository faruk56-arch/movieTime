const express = require("express")
const router = express.Router()
const {
    getMovies,
    getMovie,
    addMovie, 
    deleteMovie, 
    replaceMovie
} = require("../controllers/movieController")
// const { validationMovies } = require("../controllers/validationsMiddlewares")

router.get("/", getMovies)

router.get("/:title", getMovie)

router.post("/", addMovie)
router.delete("/:id", deleteMovie)
router.put("/:id", replaceMovie)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
