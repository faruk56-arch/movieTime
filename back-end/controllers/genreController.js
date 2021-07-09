const genreModel = require("../models/genres")
const path = require("path")
const getGenre = async (req, res) => {
    try {
        const genres = await genreModel.find()
        res.json(genres)
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addGenre = async (req, res) => {
    try {
        const newGenre = await genreModel.create(req.body)
        console.log(newGenre);
        res.json({ message: "The genre was added!", newGenre })
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })
    }
}
//delete
const deleteGenre = async (req, res) => {
    try {
        const genreID = req.params.id
        await genreModel.findByIdAndDelete(genreID)
        res.json({
            message: `genre was deleted`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getGenre,
    addGenre,
    deleteGenre
}