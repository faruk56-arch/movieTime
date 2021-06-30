const mongoose = require("mongoose")

const origonalLanguageSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    })

const origonalLanguageModel = mongoose.model("OrigonalLanguage", origonalLanguageSchema)

module.exports = origonalLanguageModel