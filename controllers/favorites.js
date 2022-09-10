
////////////////////// DEPENDENCIES
const express = require("express")
const favRouter = express.Router()
const Favorites = require("../models/recipe.js")

////////////////////// ROUTES
favRouter.get("/", (req, res)=>{
    Favorites.find({}, (error, foundFavs)=>{
        res.render("favorites/index.ejs", {
            favorites: foundFavs
        })
    })
})

module.exports = favRouter
