const router = require("express").Router()
const TaskController = require("../controllers/TaskController")
const verifyAuthToken = require("../middlewares/verifyAuthToken")

router.get("/:id",verifyAuthToken,TaskController.getTask)
router.get("/",verifyAuthToken,TaskController.getAllTask)
router.post("/", TaskController.createTask)
router.delete("/:id",TaskController.deleteTask)
router.put("/:id",TaskController.updateTask)

module.exports = router