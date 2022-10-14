const Task = require("../models/Task")



const createTask = async (req,res) => {
    const newTask = new Task(req.body);

    try {
      const savedTask = await newTask.save();
      res.status(200).json(savedTask);
    } catch (err) {
      res.status(500).json(err);
    }}

const deleteTask = async (req,res) => {
    try {
        await Task.findByIdAndDelete(req.params.id)
        res.status(200).json("Task has been deleted.")
      } catch (err) {
        res.status(500).json(err)
      }
}

const updateTask = async (req,res) => {
    try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedTask);
      } catch (err) {
        res.status(500).json(err);
      }
}

const getTask = async (req,res) => {
    try {
        const task = await Task.findById(req.params.id)
        res.status(200).json(task)
      } catch (err) {
        res.status(500).json(err)
      }
}

const getAllTask = async (req,res) => {
    try {
        const tasks = await Task.find().limit(100)
        res.status(200).json(tasks)
      } catch (err) {
        res.status(500).json(err)
      }
}


module.exports = {
   createTask,
   deleteTask,
   updateTask,
   getTask,
   getAllTask
}