const authorModel = require("../models/authors")
const path = require("path")
const getAuthor = async (req, res) => {
    try {
        const authors = await authorModel.find()
        res.json(authors)
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addAuthor = async (req, res) => {
    try {
        const newAuthor = await authorModel.create(req.body)
        console.log(newAuthor);
        res.json({ message: "The author was added!", newAuthor })
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })
    }
}
//delete
const deleteAuthor = async (req, res) => {
    try {
        const authorID = req.params.id
        await authorModel.findByIdAndDelete(authorID)
        res.json({
            message: `author was deleted`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getAuthor,
    addAuthor,
    deleteAuthor
}