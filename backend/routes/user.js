const express = require("express");
const app = express();
const zod = require("zod");
const router = express.Router();

// using zod for input validation 
 const signupSchema = zod.object({
    username : zod.string(),
    passowd : zod.string(),
    fullname : zod.string(),
 })
router.post("/signup" , (req, res) => {
    const body = req.body ;
    const {success} = signupSchema.safeParse(req.body);
    if (!success){
        return res.json({
            message : "Email is already taken / incorrect inputs"
        }).status(411)
    }


router.post("/signin");

module.exports= router;

