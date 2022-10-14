const Task = require("../models/Task")

const create = (data) => {
  const task = new Task(data)
  return task.save()
}

const remove = () => {
  
}

const update = (where, data) => {
  return Task.findOneAndUpdate(where, data, {new: true})
}


const list = () => {
  
}

const listAll = () => {
  
}



module.exports = {
    create,
    remove,
    update,
    list,
    listAll,
    
}