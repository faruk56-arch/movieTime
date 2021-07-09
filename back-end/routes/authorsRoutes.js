const express = require("express")
const router = express.Router()
const {
    getAuthor,
    addAuthor,
    deleteAuthor
} = require("../controllers/authorController")

router.get("/", getAuthor)

router.post("/", addAuthor)

router.delete("/:id", deleteAuthor)

router.all("*", (req, res) => {
    res.status(404).json({
        errorMessage: "The route was not found"
    })
})

module.exports = router
