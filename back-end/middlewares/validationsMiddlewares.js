const expressValidator = require("express-validator");

const validationMovies = [
    expressValidator.body(["title", "originalLanguage", "description", "image", "actor", "author", "releaseDate", "genre"]).exists().isString(),
    expressValidator.body("note").exists().isInt({ min: 1, max: 10 }),
    expressValidator.body("voteCount").exists().isInt(),
    expressValidator.body(["adult"]).isBoolean(),
]
const validationLogin = [
    expressValidator.body("email").exists().isEmail(),
    expressValidator.body("password").exists().isString(),
    validate
]
const validationSignup = [
    expressValidator.body("role").exists().isInt(),
    expressValidator.body("password").exists().isString().custom(value => {
        const schema = new passwordValidator()

        schema
            .is().min(4)
            .is().max(30)
            .has().uppercase()
            .has().lowercase()
            .has().digits(1)
            .has().not().spaces()
            .is().not().oneOf(["Salut-12"])

        return schema.validate(value);

    }),
    expressValidator.body(["firstName", "lastName"]).exists().isString(),
    validate
]




module.exports = {
    validationMovies,
    validationSignup
}