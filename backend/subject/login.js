const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    //here are the schema for the signup
    name:{
        type: "string",
        required: 'true'
    },
    email:{
        type: "string",
        required: 'true',
        unique: 'true',
        validate:[validator.isEmail,'validate is required']
        
    },
    password:{
        type:'string',
        required: [true,"Password is required"],
        minlength: [7,"password must be at least 6 character long"]
    }
})


module.exports = mongoose.model("login",UserSchema);