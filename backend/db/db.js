const mongoose = require('mongoose');

const db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            serverSelectionTimeoutMS: 5000
        });
        console.log('DB Connection Successful');
    } catch (error) {
        console.error('DB Connection error:', error.message);
        process.exit(1);
    }
}

module.exports = { db };