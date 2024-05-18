const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:1rzy7t5zEfdJ8gHW@cluster0.dkfoi6y.mongodb.net/paytmBasic');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const accountSchema=  new mongoose.Schema({
    userId : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "User"
    },
    balance: {
        type: number,
        required : true,
    }
})

const User = mongoose.model('userSchema', userSchema ); // string userSchema will reflect in the database
const Account = mongoose.model('accountSchema', accountSchema);

module.exports = {User, Account};

