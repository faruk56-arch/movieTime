const mongoose = require("mongoose")

const originalLanguageSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    })

const originalLanguageModel = mongoose.model("OriginalLanguage", originalLanguageSchema)

module.exports = originalLanguageModel