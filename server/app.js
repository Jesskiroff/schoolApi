const express = require('express')
const app = express();
const morgan = require('morgan');
module.exports = app;



// Logging middlware
app.use(morgan('dev'))

// Add in routes here 

app.use((err,req,res, next) =>{
    console.log(err.stack)
    res.status(err.status || 500).send(err.message)
})

// app.listen(PORT, ()=>{
//     console.log(`listening to some very cool music on port ${PORT}`);
// });




