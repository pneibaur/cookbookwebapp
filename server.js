/////// DEPENDENCIES
/////////////////////////
const express = require("express");
const app = express();
const methodOverride = require("method-override");
const mongoose = require("mongoose");
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;
const recipeController = require("./controllers/recipes.js");

// Database config
mongoose.connect(MONGODB_URI);
// Error / Success messages
const db = mongoose.connection;
db.on("error", (error) => console.log(error.message + "is mongoose no running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

///////// MIDDLEWARE
/////////////////////////
app.use(express.urlencoded({extended:false})); // extended:false - doesn't allow nested object in query strings
app.use(express.json()); // middleware that only parces JSON
app.use(methodOverride("_method")); // allows POST, PUT, and DELETE from a form.
app.use(express.static("public")); // use public folder for static assets

// controllers
app.use("/recipes", recipeController);

////////// ROUTES
/////////////////////////
// INDEX ------ welcome page. has options for main index, favorites, or tryLater. 
app.get("/", (req, res) => {
    res.render("index.ejs");
});

// NEW

// UPDATE

// CREATE

// EDIT

// SHOW

//////// LISTENER
/////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running on port", PORT))