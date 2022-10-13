const mongoose = require("mongoose");

const UserTask = new mongoose.Schema(
  {
    userId: { type: ObjectId, required: true},
    taskId: { type: ObjectId, required: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("UserTask", UserTask);