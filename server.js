require("dotenv").config();
const express = require("express");
const projectRoutes = require("./routes/projectRoute")

// create a new express app
const app = express();

//port 
const port = process.env.PORT || 4000;

// middleware's
app.use(express.json());
app.use((req,res,next)=>{
    console.log(req.path, req.method);
    next();
})

// routes 
app.use("/api/projects",projectRoutes);

// Listening 
app.listen(port,()=>{
    console.log(`Listening on port ${port}`);
})
