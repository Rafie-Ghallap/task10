const express = require('express');
const mongoose = require('mongoose');
const {connectDB} = require('./config/connectDB');
const path = require('path');
const env = require('dotenv')
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
env.config();
app.use(express.static(path.join(__dirname, '/public')))


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


connectDB();
// mongoose.connection.once('connected', () => {
    
// });
app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
module.exports = { app };