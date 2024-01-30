const express = require("express");
const app = express();
const zod = require("zod");
const { UserModelName } = require("../db");
const JWT_SECRET = require("../config");
const router = express.Router();
const jwt = require("jsonwebtoken");


// using zod for input validation 
 const signupSchema = zod.object({
    username : zod.string(),
    password : zod.string(),
    fullname : zod.string(),
 })
router.post("/signup" , async (req, res) => {
    const body = req.body ;

    //validating zod schema
    const {success} = signupSchema.safeParse(req.body);
    //checking zod input are correct or not 
    if (!success){
        return res.json({
            message : "Email is already taken / incorrect inputs"
        })
    }
    // checking if user already exist or not 
    const existingUser = await UserModelName.findOne({
        username  : req.body.username,
    });
    //actually need to add otp system here
    if (existingUser){
        return res.status(411).json({
            message : "email already existed"
        })
    }

    const creatingUserInDB = await UserModelName.create({
        username : req.body.username,
        password : req.body.password,
        fullname : req.body.fullname,   
    })

    const userId = creatingUserInDB._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);

    res.json({
        message: "User created successfully",
        token: token
    })
});


const signinSchema = zod.object({
    username : zod.string,
    password : zod.string,
})

router.post("/signin" , (req, res) => {
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if (!success){
        return res.json({
            message: "Error while logging in"
        }).statusCode(411);
    }
});


module.exports= router;