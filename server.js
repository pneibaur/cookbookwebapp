/////// DEPENDENCIES
/////////////////////////
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const MONGODB_URI = process.env.MONGODB_URI;

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

////////// ROUTES
/////////////////////////
// ROOT
app.get("/", (req, res) => {
    res.render("index.ejs");
});
// INDEX

// NEW

// UPDATE

// CREATE

// EDIT

// SHOW

//////// LISTENER
/////////////////////////
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("running on port", PORT))