const mongoose = require("mongoose");
const Schema = mongoose.Schema

const recipeSchema = new Schema({
    title: {type: String, required: true},
    description: String,
    tags: Array,
    img: String,
    rating: Number,
    isFavorite: Boolean,
    tryLater: Boolean,
    notes: Array,
    ingredients: {type: Array, required: true},
    instructions: {type: Array, required: true}
})

const Recipe = mongoose.model("Recipe", recipeSchema)

module.exports = Recipe