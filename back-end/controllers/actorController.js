const actorModel = require("../models/actors")
const path = require("path")
const getActor = async (req, res) => {
    try {
        const actors = await actorModel.find()
        res.json(actors)
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addActor = async (req, res) => {
    try {
        const newActor = await actorModel.create(req.body)
        console.log(newActor);
        res.json({ message: "The actor was added!", newActor })
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })
    }
}
//delete
const deleteActor = async (req, res) => {
    try {
        const actorID = req.params.id
        await actorModel.findByIdAndDelete(actorID)
        res.json({
            message: `actor was deleted`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getActor,
    addActor,
    deleteActor
}