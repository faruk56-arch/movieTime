const mongoose = require("mongoose")

const adressSchema = new mongoose.Schema({
    type: { type: String, required: true },
    typeName: { type: String, required: true, unique: true },
    adress: { type: String, required: true, unique: true },
})

const adressModel = mongoose.model("Adress", adressSchema)

module.exports = adressModel