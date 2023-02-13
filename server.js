require("dotenv").config();
const express = require("express");

// create a new express app
const app = express();

//port 
const port = process.env.PORT || 4000;
// Listening 
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
