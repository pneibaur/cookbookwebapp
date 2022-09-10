
////////////////////// DEPENDENCIES
const express = require("express")
const laterRouter = express.Router()
const Later = require("../models/recipe.js")

////////////////////// ROUTES
laterRouter.get("/", (req, res)=>{
    Later.find({}, (error, foundLater)=>{
        res.render("tryLater/index.ejs", {
            tryLater: foundLater
        })
    })
})

////////////////////// EXPORT
module.exports = laterRouter
