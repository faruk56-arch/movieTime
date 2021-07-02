const movieModel = require("../models/movie")
const authorModel = require("../models/authors")
const actorModel = require("../models/actors")
const adressModel = require("../models/adress")
const genreModel = require("../models/genres")
const originalLanguageModel = require("../models/originalLanguages")
const path = require("path")
const expressValidator = require("express-validator");



const getMovies = async (req, res) => {
    try {
        const movies = await movieModel.find().populate("actor", { name: 1, _id: 0 })
            .populate("adress", { type: 1, typeName: 1, adress: 1, _id: 0 })
            .populate("author", { name: 1, _id: 0 })
            .populate("genre", { name: 1, _id: 0 })
            .populate("originalLanguage", { name: 1, _id: 0 }).select({
                _id: 0,
                title: 1,
                description: 1,
                image: 1,
                releaseDate: 1,
                note: 1,
                voteCount: 1,
                adult: 1
            })
        res.json(movies)
    } catch (error) {

        res.status(500).json({ message: "There was a problem", error })
    }
}

const getMovie = async (req, res) => {
    try {
        const titlemovie = req.params.title
        const movie = await movieModel.findOne(titlemovie)
            .populate("actor", { name: 1, _id: 0 })
            .populate("adress", { typeName: 1, adress: 1, _id: 0 })
            .populate("author", { name: 1, _id: 0 })
            .populate("genre", { name: 1, _id: 0 })
            .populate("originalLanguage", { name: 1, _id: 0 }).select({
                _id: 0,
                title: 1,
                description: 1,
                image: 1,
                releaseDate: 1,
                note: 1,
                voteCount: 1,
                adult: 1
            })


        // (['actor', 'adress', 'author', 'genre', 'originalLanguage'])

        res.json(movie)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addMovie = async (req, res) => {

    try {
        const errors = expressValidator.validationResult(req);

        if (!errors.isEmpty()) {
            res.status(400).json({ errors: errors.array() })
        } else {
            const newMovie = await movieModel.create(req.body)
            console.log(newMovie);
            res.json({ message: "The movie was added!", newMovie })
        }
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })

    }
}




module.exports = {
    getMovie, getMovies, addMovie
}

