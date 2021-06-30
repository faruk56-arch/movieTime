const movieModel = require("../models/movie")
const path = require("path")

const getMovies = async (req, res) => {
    try {
        const movies = await movieModel.find()

        res.json(movies)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getMovie = async (req, res) => {
    try {
        const titlemovie = req.params.title
        const movie = await movieModel.findOne(titlemovie)

        res.json(movie)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const addMovie = async (req, res) => {
    try {
        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newMovie = await movieModel.create(req.body)

            res.json({ message: "The movie was added!", newMovie })
        }
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}


module.exports = {
    getMovie, getMovies, addMovie
}

