const mongoose = require("mongoose")

const actorSchema = new mongoose.Schema({
    name: { type: String, required: true , unique: true },
    })

const actorModel = mongoose.model("Actor", actorSchema)

module.exports = actorModel