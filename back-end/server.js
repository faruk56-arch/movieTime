const express = require("express")
const mongoose = require("mongoose")
const moviesRoutes = require("./routes/moviesRoutes")
const cors = require("cors")


mongoose.connect("mongodb://localhost:27017/movieTime", (err) => {
    if (err) {
        console.error(err);
    } else {
        console.log("I'm connected to the database")
    }
})

const port = 8000

const app = express()
app.use(cors())

app.use(express.json())

app.use("/movies", moviesRoutes)

app.listen(port, () => {
    console.log("The server is waiting for requests")
})