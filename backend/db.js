const mongoose  = require("mongoose")
mongoose.connect("mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username : {
        type : string, 
        required : true,
        minLength : 3, 
        maxLength : 20,
        unique  :true,
    },
    password : {
        type : string, 
        required : true, 
        minLength : 6
    },
    fullname : {
        type: string,
        required : true,
        maxLength : 50
    },
})

const userModel = mongoose.model("userModel", userSchema)

module.exports = {
    userModel
}