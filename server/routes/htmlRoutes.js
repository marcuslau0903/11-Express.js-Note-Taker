const { Router } = require("express")
const { renderHomeHtml, renderNotesHtml} = require("../controllers/htmlControllers")

const htmlRouter = Router()

// configure routes

htmlRouter.get("/notes", renderNotesHtml)
htmlRouter.get("/", renderHomeHtml)

module.exports = htmlRouter 