const express = require("express")
const path = require("path")
const nodemon = require("nodemon")
const fs = require("fs")
const cors = require("cors")
const onSuccessfulOpen = () => console.log(`Server is listening to: http://localhost:${PORT}`)

//import routes
const { htmlRouter, apiRouter } = require("./routes")
//set up port
const PORT = process.env.PORT || 3000;
//create server
const app = express()
// register middleware chain
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json({extended:true}))
// instruct server to use these routes 
app.use(express.static("public"))

app.use("/api",apiRouter)
app.use("/", htmlRouter)





app.listen(PORT,onSuccessfulOpen)