const path = require("path")
const fs = require("fs")

const writeToFile = (data) => fs.writeFileSync(path.resolve(__dirname,'../db/db.json'),JSON.stringify(data))
    
const readFromFile = () => fs.readFileSync(path.resolve(__dirname,'../db/db.json'),"utf8")

module.exports = { writeToFile, readFromFile}