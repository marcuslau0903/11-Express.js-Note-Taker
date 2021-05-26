const fs = require("fs")
const path = require("path")

const writeToFile = (data) => fs.writeFileSync(path.resolve(__dirname,'../db/db.json'),JSON.stringify(data))
    
const readFromFile = () => fs.readFileSync(path.resolve(__dirname,'../db/db.json'),"utf8")
    

const getData = (req,res) => {
    const notesArray = JSON.parse(readFromFile())
    res.json(notesArray)
}

const postData = (req,res) => {
    const notesArray = JSON.parse(readFromFile())
    const note = req.body
    //add uuid 
    notesArray.push(note)
    writeToFile(notesArray)
}

const deleteData = (req,res) => {

}

module.exports = { getData, postData, deleteData }