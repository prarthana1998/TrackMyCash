require('dotenv').config();
const mongoose = require('mongoose');

async function testConnection() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      serverSelectionTimeoutMS: 5000
    });
    console.log('Successfully connected to MongoDB');
    await mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error.message);
  }
}

testConnection();