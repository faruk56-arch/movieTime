
require('dotenv').config();
const express = require("express")
const mongoose = require("mongoose")
const moviesRoutes = require("./routes/moviesRoutes")
const genresRoutes = require("./routes/genresRoutes")
const actorsRoutes = require("./routes/actorsRoutes")
const authorsRoutes = require("./routes/authorsRoutes")
const adressRoutes = require("./routes/adressRoutes")
const originalLanguagesRoutes = require("./routes/originalLanguagesRoutes")
const authRoutes = require("./routes/authRoutes")
const usersRoutes = require("./routes/usersRoutes")

const cors = require("cors")
const {MONGODB_URI, PORT}= process.env;

mongoose.connect(MONGODB_URI, (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = PORT

const app = express()
app.use(cors())

app.use(express.json())

app.use("/movies", moviesRoutes)
app.use("/genres", genresRoutes)
app.use("/actors", actorsRoutes)
app.use("/authors", authorsRoutes)
app.use("/adress", adressRoutes)
app.use("/originalLanguages", originalLanguagesRoutes)
app.use("/auth", authRoutes)
app.use("/users", usersRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})