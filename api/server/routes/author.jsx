const router = require("express").Router();
const User =require("../models/User");

//REGISTER
router.post("/register", async (req,res)=>{
    try{
        const newUser = new User({
            username: req.body.username,
            username: req.body.email,
            username: req.body.password,
        })

        const user = await newUser.save();
    } catch(err){
        res.status(500).json(err);
    }
});

//LOGIN