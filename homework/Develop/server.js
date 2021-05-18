const express = require("express")
const path = require("path")
const app = express()
// const nodemon = require("nodemon")
const fs = require("fs")

app.use(express.urlencoded ({extended:true}))
app.use(express.json())
app.use(express.static(__dirname + '/public'))
app.use(express.static("./"))

app.get("/", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"))
})
app.get("/notes", (req,res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"))
})


app.listen(3000, ()=>{
    console.log("app running on 3000")
})