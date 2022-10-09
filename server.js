/////// DEPENDENCIES
/////////////////////////
const express = require("express")
const app = express()
const methodOverride = require("method-override")
const mongoose = require("mongoose")
require("dotenv").config()
const MONGODB_URI = process.env.MONGODB_URI
const recipeController = require("./controllers/recipes.js")
const favController = require("./controllers/favorites.js")
const laterController = require("./controllers/trylater.js")
const authRouter = require("./routes/auth.js")

// Database config
mongoose.connect(MONGODB_URI)
// Error / Success messages
const db = mongoose.connection
db.on("error", (error) => console.log(error.message + "is mongoose no running?"))
db.on("connected", () => console.log("mongo connected"))
db.on("disconnected", () => console.log("mongo disconnected"))

///////// MIDDLEWARE
/////////////////////////
app.use(express.urlencoded({extended:false})) // extended:false - doesn't allow nested object in query strings
app.use(express.json()) // middleware that only parces JSON
app.use(methodOverride("_method")) // allows POST, PUT, and DELETE from a form.
app.use(express.static("public")) // use public folder for static assets
app.use((req, res, next)=>{
    const user = firebase.auth().currentUser
    res.locals.currentUser = user
    next()
})

// controllers
app.use("/recipes", recipeController)
app.use("/favorites", favController)
app.use("/trylater", laterController)
app.use("/", authRouter)

////////// ROUTES
/////////////////////////
// INDEX ------ welcome page. has options for main index, favorites, or tryLater. 
app.get("/", (req, res) => {
    res.render("index.ejs", {
        tabTitle: "Main"
    })
});

//////// LISTENER
/////////////////////////
const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("running on port", PORT))