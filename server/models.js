import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  },
  isComplete: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
