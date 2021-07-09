const express = require("express")
const router = express.Router()
const {
    getActor,
    addActor,
    deleteActor
} = require("../controllers/actorController")

router.get("/", getActor)

router.post("/", addActor)

router.delete("/:id", deleteActor)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
