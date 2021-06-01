const { v4: uuidv4 } = require('uuid') 
const {writeToFile, readFromFile} = require ("../utils/util")


const getData = (req,res) => {
    const notesArray = JSON.parse(readFromFile())
    res.json(notesArray)
}

const postData = (req,res) => {
    const notesArray = JSON.parse(readFromFile())
    const note = {
        id:uuidv4(),
        title:req.body.title,
        text:req.body.text
    }
    notesArray.push(note)
    writeToFile(notesArray)
    res.json(notesArray)
}

const deleteData = (req,res) => {
    const id = req.params.id 
    const notesArray = JSON.parse(readFromFile())
    const filteredNotes = notesArray.filter((each) => {
        return each.id !== id
    })
    writeToFile(filteredNotes)
    res.json(filteredNotes)
}

module.exports = { getData, postData, deleteData }