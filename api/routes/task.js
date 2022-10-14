const router = require("express").Router()
const TaskController = require("../controllers/TaskController")


router.get("/:id",TaskController.getTask)
router.get("/",TaskController.getAllTask)
router.post("/", TaskController.createTask)
router.delete("/:id",TaskController.deleteTask)
router.put("/:id",TaskController.updateTask)

module.exports = router