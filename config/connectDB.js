const mongoose = require('mongoose');
const env = require('dotenv')

env.config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Database connected successfully");
    } catch (error) {
        console.log("Database connection error");
    }

}



module.exports = { connectDB }; 