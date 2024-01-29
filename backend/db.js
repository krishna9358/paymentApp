const mongoose  = require("mongoose")
mongoose.connect("mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/paytm")

const userSchema = new mongoose.Schema({
    username : string,
    password : string,
    name : string,
})

const userModel = mongoose.model("User", userSchema)

module.exports = {
    userModel
}