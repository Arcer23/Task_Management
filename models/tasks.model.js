import mongoose from "mongoose";
const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    dueDate: { type: Date, required: true, default: Date.now() },
    priority: { type: String, enum: ["Low", "Medium", "High"], required: true },
    status: {
      type: String,
      enum: ["To Do", "In Progress", "Completed"],
      default: "To Do",
    },
    assignedTo: { type: mongoose.Schema.Types.ObjectId, ref: "user" }, // Ref to User model
  },
  { timestamps: true }
);

module.exports = mongoose.model("task", taskSchema);
