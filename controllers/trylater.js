
////////////////////// DEPENDENCIES
const express = require("express")
const laterRouter = express.Router()
const Later = require("../models/recipe.js")

////////////////////// ROUTES
laterRouter.get("/", (req, res)=>{
    Later.find({tryLater:true}, (error, foundLater)=>{
        res.render("tryLater/index.ejs", {
            tryLater: foundLater,
            tabTitle: "Saved 4 Later"
        })
    })
})

////////////////////// EXPORT
module.exports = laterRouter
