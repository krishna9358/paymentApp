const express = require("express");
const app = express();
const zod = require("zod");
const { UserModelName } = require("../db");
const JWT_SECRET = require("../config");
const router = express.Router();

// using zod for input validation 
 const signupSchema = zod.object({
    username : zod.string(),
    passowd : zod.string(),
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
        }).status(411);
    // checking if user already exist or not 
    const existingUser = await UserModelName.findOne({
        username  : req.body.username,
    });
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
}});


router.post("/signin");

module.exports= router;