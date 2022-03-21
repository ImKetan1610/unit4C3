/*
Book Model

likes (integer, minimum default is 0)
coverImage (string, required and it can be 1 only)
content ( string, required)
timestamps (string, required)
*/

const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes: {type:Number, required:true, default:0},
    coverImage: {type:String, required: true},
    content: {type:String,required: true},
    userId: {type: mongoose.Schema.Types.ObjectId, ref: "user", required:true},
    publicationId: {type: mongoose.Schema.Types.ObjectId, ref: "publication", required:true}
},{
    versionKey:false,
    timestamps: true
})

module.exports = mongoose.model("book", bookSchema);