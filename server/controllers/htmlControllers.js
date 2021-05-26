const path = require("path")

const renderHomeHtml = (req,res) =>{
   const filePath = path.join(__dirname,"../../public/index.html")
   res.sendFile(filePath)
}

const renderNotesHtml = (req,res) => {
    const filePath = path.join(__dirname,"../../public/notes.html")
    res.sendFile(filePath)
}

module.exports = {
    renderHomeHtml,
    renderNotesHtml
}
