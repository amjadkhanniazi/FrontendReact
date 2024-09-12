import mongoose from 'mongoose';
import config from './config.js' // Import the configuration

async function connectDB() {
  const client = mongoose.connect(config.mongoURI, config.options);

  try {
    await client;
    console.log('Connected to MongoDB');

    // Perform operations here...
    
  } catch (error) {
    console.error('Error connecting to MongoDB', error);
  }
}


export default connectDB;