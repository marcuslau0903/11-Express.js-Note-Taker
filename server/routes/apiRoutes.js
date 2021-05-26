const { Router } = require("express")
//import from api controllers 
const { getData,postData,deleteData } = require("../controllers/apiControllers")


const apiRouter = Router()
// configure routes
apiRouter.get("/notes", getData)

apiRouter.post("/notes", postData)

apiRouter.delete("/something", deleteData)


module.exports = apiRouter 