const expressValidator = require("express-validator");

const validationMovies = [
    expressValidator.body(["title", "originalLanguage", "description", "image", "actor", "author", "releaseDate", "genre"]).exists().isString(),
    expressValidator.body("note").exists().isInt({ min: 1, max: 10 }),
    expressValidator.body("voteCount").exists().isInt(),
    expressValidator.body(["adult"]).isBoolean(),
]




module.exports = {
    validationMovies,
}