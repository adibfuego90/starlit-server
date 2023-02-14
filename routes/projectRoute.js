const express = require("express");

const router =express.Router();

// routes 
// GET  all projects 
router.get("/",(req,res) =>{
    res.json({message:"GET all projects"});
});
// GET  a single project 
router.get("/:id",(req,res) =>{
    res.json({message:"GET a single project"});
});
// POST  all projects 
router.post("/",(req,res) =>{
    res.json({message:"POST a new  project"});
});
// DELETE  all projects 
router.delete("/:id",(req,res) =>{
    res.json({message:"DELETE a  project"});
});
// UPDATE  all projects 
router.patch("/:id",(req,res) =>{
    res.json({message:"UPDATE a project"});
});


// export 
module.exports= router;