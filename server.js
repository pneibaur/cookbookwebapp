require("dotenv").config();
/////// DEPENDENCIES
/////////////////////////
const express = require("express");
const methodOverride = require("method-override");
const mongoose = require("mongoose");
const app = express();
const db = mongoose.connection;
// Port
const PORT = process.env.PORT || 3000;
// Database
const MONGODB_URI = process.env.MONGODB_URI;
// Connect to MongoDB - fix any depreciacion warnings
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// Error / Success
db.on("error", (error) => console.log(error.message + "is mongoose no running?"));
db.on("connected", () => console.log("mongo connected"));
db.on("disconnected", () => console.log("mongo disconnected"));

///////// MIDDLEWARE
/////////////////////////
app.use(express.static("public")); // use public folder for static assets
app.use(express.urlencoded({extended:false})); // extended:false - doesn't allow nested object in query strings
app.use(express.json()); // middleware that only parces JSON
app.use(methodOverride("_method")); // allows POST, PUT, and DELETE from a form.

////////// ROUTES
/////////////////////////
// ROOT
app.get("/", (req, res) => res.send("connected."))
// INDEX

// NEW

// UPDATE

// CREATE

// EDIT

// SHOW

//////// LISTENER
/////////////////////////
app.listen(PORT, () => console.log("running on port", PORT))