const originalLanguageModel = require("../models/originalLanguages")
const path = require("path")
const getOriginalLanguages = async (req, res) => {
    try {
        const originalLanguages = await originalLanguageModel.find()
        res.json(originalLanguages)
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addOriginalLanguages = async (req, res) => {
    try {
        const newOriginalLanguages = await originalLanguageModel.create(req.body)
        console.log(newOriginalLanguages);
        res.json({ message: "The originalLanguage was added!", newOriginalLanguages })
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })
    }
}
//delete
const deleteOriginalLanguages = async (req, res) => {
    try {
        const originalLanguageID = req.params.id
        await originalLanguageModel.findByIdAndDelete(originalLanguageID)
        res.json({
            message: `originalLanguage was deleted`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getOriginalLanguages,
    addOriginalLanguages,
    deleteOriginalLanguages
}