const express = require("express")
const router = express.router()
const firebase = require('firebase');
const {initializeApp} = require("firebase/app")
const {
    GoogleAuthProvider,
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    sendPasswordResetEmail,
    signOut,
} = require("firebase/auth")
const {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
    doc,
} = require("firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyDcYiPVaoOSgiPbtwABj-bakJReHf_0mQk",
    authDomain: "cookbook-web-app-1311.firebaseapp.com",
    projectId: "cookbook-web-app-1311",
    storageBucket: "cookbook-web-app-1311.appspot.com",
    messagingSenderId: "1005531795747",
    appId: "1:1005531795747:web:44976fb1c89689a0c37c96",
    measurementId: "G-S686795LXC"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const googleProvider = new GoogleAuthProvider()

router.post('/register', async (req, res) => {
    try {
        const { email, name, password } = req.body
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        })
        res.redirect('/');
    } catch (error) {
        console.log(error)
    }
})

router.post("/login", async (req, res)=>{
    const {email, password} = req.body
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user
    }).catch((error)=>{
        console.log("oops, there was an error: ", error)
    })
    res.redirect("/")
})

router.get("/logout", (req, res)=>{
    signOut(auth).then(() =>{
        res.redirect("/login")
    }).catch((error)=>{
        console.log("oops there was an error: ", error)
    })
})

module.exports = router