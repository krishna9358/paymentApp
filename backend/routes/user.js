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
    username : zod.string().email(),
    password : zod.string(),
})

router.post("/signin" , async (req, res) => {
    const {success} = signinSchema.safeParse(req.body); //const obj =
    if (!success){ // if (obj.success)
        return res.status(411).json({
            message: "Error while logging in"
        });
    }
    const userExist = await UserModelName.findOne({
        username : req.body.username,
        password : req.body.password 
    });
    
    if (userExist){
        const token = jwt.sign({
            userId : user._id
        }, JWT_SECRET);
        res.json ({
            token : token
        })
        return ;
    }
    res.status(411).json({
        message : "Error while logging in"
    })
});



const  { authMiddleware } = require("../middleware");


// other auth routes

const updateBody = zod.object({
	password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body)
    if (!success) {
        res.status(411).json({
            message: "Error while updating information"
        })
    }

    await User.updateOne(req.body, {
        _id: req.userId
    })

    res.json({
        message: "Updated successfully"
    })
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

module.exports= router;