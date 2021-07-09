const express = require("express")
const router = express.Router()
const {
    getOriginalLanguages,
    addOriginalLanguages,
    deleteOriginalLanguages
} = require("../controllers/originalLanguageController")

router.get("/", getOriginalLanguages)

router.post("/", addOriginalLanguages)

router.delete("/:id", deleteOriginalLanguages)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
