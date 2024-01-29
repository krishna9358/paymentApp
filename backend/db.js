const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        maxLength : 10,
        minLength: 5,
        required : true, 
        unique : true , 
    },
    password : {
        type : String,
         minLength: 6, 
         required : true,
    },
    fullname : {
        type : String,
        required : true,
        maxLength : 50
    }
});
const UserModelName = mongoose.model("User", userSchema);

module.exports = {
    UserModelName,
}