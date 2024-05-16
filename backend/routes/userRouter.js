const express = require('express');
const zod = require('zod');
const { User } = require("../db");
const jwt = require("jsonwebtoken");
const JWT_SECRET = require('../config');
const router = express.Router();

const signupSchema = zod.object({
    username : zod.string().email(), // idealy check if user has given right email 
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),

});

const signinSchema = zod.object({
    username : zod.string(),
    password : zod.string(),

});


router.post("/signup", async(req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(body);
    if(!success) {
        return res.json({
            success : false,
            message : "Invalid data"
        }).status(411);
    }
    
    const user = User.findOne({
        username : body.username,
    })
    if (user._id){
        return res.json({
            messgae : "Email already taken / Incorrect inputs",
        }).status(411);
    }

    // send email otp and verify that too in real world
    const dbUser = await User.create(body);
    const token= jwt.sign({
        userId: dbUser._id,
    }, JWT_SECRET)
    res.json({
        messaage : "User created successfully",
        token: token,
    }).status(200)


});

router.post("/signin", (req, res) => {


});



module.exports = router;