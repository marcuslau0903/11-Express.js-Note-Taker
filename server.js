const express = require("express")
const path = require("path")
const nodemon = require("nodemon")
const fs = require("fs")
const cors = require("cors")
const PORT = process.env.PORT || 5000;
const app = express()

const onSuccessfulOpen = () => console.log(`Server is listening to: http://localhost:${PORT}`)
// register middleware chain
app.use(cors())
app.use(express.urlencoded ({extended:true}))
app.use(express.json())
// set static folders
app.use(express.static(path.join(__dirname,"public")))



const renderHomePage = (req,res) => {
    res.sendFile(path.join(__dirname, "public/index.html"))
}
const renderNotesPage = (req,res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"))
}

//express analyse incoming request, checks path, reroute
app.get("/",renderHomePage)
app.get("/notes", renderNotesPage)



app.listen(PORT,onSuccessfulOpen)