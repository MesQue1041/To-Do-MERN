const mongoose = require('mongoose');

// Connection string to your MongoDB database
const uri = 'mongodb://localhost:27017/todolist';

// Async function to connect to MongoDB
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB Connection succeeded...');
  } catch (err) {
    console.error(`Error in DB Connection: ${err}`);
    process.exit(1); // Exit the process with failure code
  }
}

// Call the connectDB function to establish the connection
connectDB();

module.exports = mongoose;
