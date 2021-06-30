const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: { type: String, unique: true },
    originalLanguage: [{
        type: mongoose.Types.ObjectId,
        ref: "OriginalLanguage"
    }],

    description: String,
    image: String,
    actor: [{
        type: mongoose.Types.ObjectId,
        ref: "Actor"
    }],
    author: [{
        type: mongoose.Types.ObjectId,
        ref: "Author"
    }],
    releaseDate: String,
    note: Number,
    voteCount: Number,
    adress: [{
        type: mongoose.Types.ObjectId,
        ref: "Adress"
    }],
    genre: [{
        type: mongoose.Types.ObjectId,
        ref: "Genre"
    }],
    adult: Boolean,
    created: { type: Date, default: Date.now }
})

const movieModel = mongoose.model("Movie", movieSchema)

module.exports = movieModel