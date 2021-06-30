const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    })

const authorModel = mongoose.model("Author", authorSchema)

module.exports = authorModel