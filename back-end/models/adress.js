const mongoose = require("mongoose")

const adressSchema = new mongoose.Schema({
    type: String,
    typeName: String,
    adress: { type: String, required: true, unique: true },
})

const adressModel = mongoose.model("Adress", adressSchema)

module.exports = adressModel