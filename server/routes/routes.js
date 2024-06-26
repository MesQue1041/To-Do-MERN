import express from 'express';
import Task from '../models.js'; // Adjust the path if necessary
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to fetch tasks' });
  }
});

// Create a new task
router.post('/', async (req, res) => {
  const task = new Task(req.body);
  try {
    const savedTask = await task.save();
    res.json(savedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to save task' });
  }
});

// Update a task by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.json(updatedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to update task' });
  }
});

// Delete a task by ID
router.delete('/:id', async (req, res) => {
  try {
    const deletedTask = await Task.findByIdAndDelete(req.params.id);
    res.json(deletedTask);
  } catch (err) {
    console.log(err);
    res.status(500).send({ error: 'Failed to delete task' });
  }
});

export default router;
