const express = require('express')
const app = express();
const morgan = require('morgan');
module.exports = app;

// Log middlware
app.use(morgan('dev'))

//Body parsing middleware
app.use(express.json())

//Base
app.use('/api', require('./api'))

app.use((err,req,res, next) =>{
    console.log(err.stack)
    res.status(err.status || 500).send(err.message)
});






