const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    desc: { type: String, require: true},
    img: { type: String},
    steps: { type: Number ,require: true},
  },
  { timestamps: true }
);

module.exports = mongoose.model("Task", TaskSchema);