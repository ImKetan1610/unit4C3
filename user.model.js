const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type:String, required:true, minlength:3, maxlength:30},
    lastName:{type:String, minlength:3, maxlength:30},
    age:{type:Number, required:true, min:1, max:150},
    email : {type:String, required: true, unique: true},
    profileImages : {type:String, reuired: true}
},{
    versionKey:false,
    timestamps: true
})

module.exports = mongoose.model("user", userSchema);




// User Model

// firstName (string, required, minimum length 3 and maximum length 30)
// lastName (string, optional, if given then minimum length 3 and maximum length 30)
// age (integer, required, should be between 1 and 150)
// email (string, required, unique)
// profileImages: (array of imageUrls and atleast 1 profile image is required)
// timestamps (string, required)