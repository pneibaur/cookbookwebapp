const express = require("express");
const recipeRouter = express.Router();
const Recipes = require("../models/recipe.js");

//////////// ROUTES
const seedData = require("../models/seedData.js");
recipeRouter.get("/seed", (req, res)=>{
    Recipes.deleteMany({}, (error, allRecipes)=>{})
    Recipes.create(seedData, (error, data) =>{
        res.redirect("/recipes")
    })
})
// Index
recipeRouter.get("/", (req, res)=>{
    Recipes.find({}, (error, foundRecipes)=>{
        res.render("recipes/index.ejs", {
            allRecipes: foundRecipes
        })
    })
})
// Destroy
// Update
// Create
// Edit
// Show
recipeRouter.get("/:id", (req, res)=>{
    Recipes.findById(req.params.id, (error, foundRecipe)=>{
        res.render("recipes/show.ejs", {
            showRecipe: foundRecipe
        })
    })
})

module.exports = recipeRouter;