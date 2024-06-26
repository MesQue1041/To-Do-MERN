import express from 'express';
import router from './routes/routes.js'; // Adjust the path if necessary
import mongoose from 'mongoose'; // Only import mongoose
import cors from 'cors';
const app = express();

app.use(express.json())
app.use(cors())
app.use('/api/tasks', router);

app.listen(8000, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Server started at PORT : 8000');
  }
});

const uri = 'mongodb://localhost:27017/todolist';

async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connection succeeded...');
  } catch (err) {
    console.error(`Error in DB Connection: ${err}`);
    process.exit(1); // Exit the process with failure code
  }
}

connectDB();
