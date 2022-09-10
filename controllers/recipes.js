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
//  New
recipeRouter.get("/new", (req, res)=>{
    res.render("recipes/new.ejs")
})
// Destroy
recipeRouter.delete("/:id", (req, res)=>{
    Recipes.findByIdAndDelete(req.params.id, ()=>{
        res.redirect("/recipes")
    })
})
// Update
// Create
recipeRouter.post("/", (req, res)=>{
    Recipes.create(req.body, (error, newRecipe)=>{
        console.log(`OG newRecipe tags: ${newRecipe.tags}`)
        newRecipe.tags[0].split(",") // attempting to separate a string separated by comma. not functional right now. 
        console.log(`NEW newRecipe tags: ${newRecipe}`)
        res.redirect("/recipes")
    })
})
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