const adressModel = require("../models/adress")
const path = require("path")
const getAdress = async (req, res) => {
    try {
        const adresss = await adressModel.find()
        res.json(adresss)
    } catch (error) {
        res.status(500).json({ message: "There was a problem", error })
    }
}

const addAdress = async (req, res) => {
    try {
        const newAdress = await adressModel.create(req.body)
        console.log(newAdress);
        res.json({ message: "The adress was added!", newAdress })
    } catch (error) {
        console.log("error found", error);
        res.status(500).json({ message: "There was a problem", error })
    }
}
//delete
const deleteAdress = async (req, res) => {
    try {
        const adressID = req.params.id
        await adressModel.findByIdAndDelete(adressID)
        res.json({
            message: `adress was deleted`
        })
    } catch (err) {
        console.error(err)
        res.status(500).json({ errorMessage: "There was a problem :(" })
    }
}

module.exports = {
    getAdress,
    addAdress,
    deleteAdress
}