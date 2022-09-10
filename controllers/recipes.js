const express = require("express");
const recipeRouter = express.Router();
const Recipes = require("../models/recipe.js");

//////////// ROUTES
// const seedData = require("../models/seedData.js");
// recipeRouter.get("/seed", (req, res)=>{
//     Recipes.
// })
// Index
recipeRouter.get("/", (req, res)=>{
    res.send("recipes index page")
})
// Destroy
// Update
// Create
// Edit
// Show

module.exports = recipeRouter;