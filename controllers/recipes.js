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
            allRecipes: foundRecipes,
            tabTitle: "All"
        })
    })
})
//  New
recipeRouter.get("/new", (req, res)=>{
    res.render("recipes/new.ejs", {
        tabTitle: "New Recipe"
    })
})
// Destroy
recipeRouter.delete("/:id", (req, res)=>{
    Recipes.findByIdAndDelete(req.params.id, ()=>{
        res.redirect("/recipes")
    })
})
// Update
recipeRouter.put("/:id", (req, res)=>{
    if (req.body.isFavorite === "on"){req.body.isFavorite = true}
    else {req.body.isFavorite = false}
    if (req.body.tryLater === "on"){req.body.tryLater = true}
    else {req.body.tryLater = false}
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, currentRecipe)=>{
            // sorts currentRecipe.tags
            if (currentRecipe.tags[0] === '') {currentRecipe.tags = []} 
            else {currentRecipe.tags = currentRecipe.tags[0].split(",")} // this is the logic to convert an array into multiple arrays. or if it's empty, then it's an empty array. 
            // sorts currentRecipe.ingredients
            if (currentRecipe.ingredients[0] === '') {currentRecipe.ingredients = []}
            else {currentRecipe.ingredients = currentRecipe.ingredients[0].split(".")}
            // sorts currentRecipe.instructions
            if (currentRecipe.instructions[0] === '') {currentRecipe.instructions = []}
            else {currentRecipe.instructions = currentRecipe.instructions[0].split(".")}
            // sorts currentRecipe.notes
            if (currentRecipe.notes[0] === '') {currentRecipe.notes = []}
            else {currentRecipe.notes = currentRecipe.notes[0].split(".")}
            console.log(`UPDATE: ${currentRecipe}`)
            currentRecipe.save()
        res.redirect(`/recipes/${req.params.id}`)
    })
})
// adds item to favorites
recipeRouter.put("/:id/addFav", (req, res)=>{
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, currentRecipe)=>{
        if (currentRecipe.isFavorite === true){currentRecipe.isFavorite = false}
        else {currentRecipe.isFavorite = true}
        currentRecipe.save()
        res.redirect(`/recipes/${req.params.id}`)
    })
})
// adds recipe to "try later"
recipeRouter.put("/:id/trylater", (req, res)=>{
    Recipes.findByIdAndUpdate(req.params.id, req.body, {new:true}, (error, currentRecipe)=>{
        if (currentRecipe.tryLater === true){currentRecipe.tryLater = false}
        else {currentRecipe.tryLater = true}
        currentRecipe.save()
        res.redirect(`/recipes/${req.params.id}`)
    })
})
// Create
recipeRouter.post("/", (req, res)=>{
    if (req.body.isFavorite === "on"){req.body.isFavorite = true}
    else {req.body.isFavorite = false}
    if (req.body.tryLater === "on"){req.body.tryLater = true}
    else {req.body.tryLater = false}
    Recipes.create(req.body, (error, newRecipe)=>{
        console.log(newRecipe)
        // sorts newRecipe.tags
        if (newRecipe.tags[0] === '') {newRecipe.tags = []} 
        else {newRecipe.tags = newRecipe.tags[0].split(", ")} // this is the logic to convert an array into multiple arrays. or if it's empty, then it's an empty array. 
        // sorts newRecipe.ingredients
        if (newRecipe.ingredients[0] === '') {newRecipe.ingredients = []}
        else {newRecipe.ingredients = newRecipe.ingredients[0].split(". ")}
        // sorts newRecipe.instructions
        if (newRecipe.instructions[0] === '') {newRecipe.instructions = []}
        else {newRecipe.instructions = newRecipe.instructions[0].split(". ")}
        // sorts newRecipe.notes
        if (newRecipe.notes[0] === '') {newRecipe.notes = []}
        else {newRecipe.notes = newRecipe.notes[0].split(". ")}
        newRecipe.save()
        res.redirect("/recipes")
    })
})
// Edit
recipeRouter.get("/:id/edit", (req, res)=>{
    Recipes.findById(req.params.id, (error, foundRecipe)=>{
        res.render("recipes/edit.ejs", {
            editRecipe: foundRecipe,
            tabTitle: "Edit"
        })
    })
})
// Show
recipeRouter.get("/:id", (req, res)=>{
    Recipes.findById(req.params.id, (error, foundRecipe)=>{
        res.render("recipes/show.ejs", {
            showRecipe: foundRecipe,
            tabTitle: foundRecipe.title
        })
    })
})

module.exports = recipeRouter;