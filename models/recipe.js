const mongoose = require("mongoose");
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    tags: Array,
    img: String,
    link: String,
    rating: Number,
    isFavorite: Boolean,
    tryLater: Boolean,
    notes: String,
    ingredients: String,
    instructions: String
}, {timestamps: true})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe