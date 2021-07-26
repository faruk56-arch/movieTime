const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    
    title: { type: String, unique: true, required: true },
    originalLanguage: [{
        type: mongoose.Types.ObjectId,
        ref: "OriginalLanguage"
    }],

    description: { type: String, required: true },
    image: { type: String, required: true },
    actor: [{
        type: mongoose.Types.ObjectId,
        ref: "Actor"
    }],
    author: [{
        type: mongoose.Types.ObjectId,
        ref: "Author"
    }],
    releaseDate: { type: String, required: true },
    note: { type: Number, required: true },
    voteCount: { type: Number, required: true },
    adress: [{
        type: mongoose.Types.ObjectId,
        ref: "Adress"
    }],
    genre: [{
        type: mongoose.Types.ObjectId,
        ref: "Genre"
    }],
    adult: { type: Boolean, required: true },
    created: { type: Date, default: Date.now }
})

const movieModel = mongoose.model("Movie", movieSchema)

module.exports = movieModel