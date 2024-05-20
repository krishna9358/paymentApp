const express = require('express');
const zod = require('zod');
const { User, Account } = require("../db");
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require('../config');
const router = express.Router();
const  { authMiddleware } = require("../middleware");


const signupSchema = zod.object({
    username : zod.string().email(), // idealy check if user has given right email 
    password : zod.string(),
    firstName : zod.string(),
    lastName : zod.string(),

});

const signinSchema = zod.object({
    username : zod.string().email(),
    password : zod.string(),

});

const updateSchema = zod.object({
    password : zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
})

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
    // hash the password while puttting in the database
    //adding salt / some jibrish to the password before hashing the password
    const dbUser = await User.create(body);
    await Account.create({
        userId : dbUser._id,
        balance : 1+ Math.random()*10000,
    })
    const token= jwt.sign({
        userId: dbUser._id,
    }, JWT_SECRET)
    res.json({
        messaage : "User created successfully",
        token: token,
    }).status(200)


});

router.post("/signin", async (req, res) => {
    const body = req.body;
    const {success}= signinSchema.safeParse(body);
    if (!success){
        return res.json({
            success : false,
            message : "Invalid data"
        }).status(411);
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })
    if(user){
        const token = jwt.sign({
            userId: user._id,
        }, JWT_SECRET);
        res.json({
            token: token,
            message: "Successfully logged in"
        })
        return;
    }

    res.status(411).json({
        message: "Error while logging in "
    })

});

router.put("/", authMiddleware, async (req, res) => {
    const body = req.body;
    const {success} = updateSchema.safeParse(body);
    if (!success){
        return res.json({
            success : false,
            message : "Error while updating"
        }).status(411);
    }
    await User.updateOne({ _id: req.userId }, req.body);
    res.json({
        message : "User updated successfully"
    }).status(200);
})

router.get("/bulk", async (req, res) => {
    const filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }   
        }]
    })
    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})



module.exports = router;