
////////////////////// DEPENDENCIES
const express = require("express")
const favRouter = express.Router()
const Favorites = require("../models/recipe.js")

////////////////////// ROUTES
// Index
favRouter.get("/", (req, res)=>{
    Favorites.find({isFavorite:true}, (error, foundFavs)=>{
        res.render("favorites/index.ejs", {
            favorites: foundFavs,
            tabTitle: "Favorites"
        })
    })
})
// New
// Destroy
// Update
// Create
// Edit
// Show


module.exports = favRouter
