
const mongoose = require("mongoose");

const publicationSchema = new mongoose.Schema({
    name:{required:true, type:String}
},
{
    versionKey:false,
    timestamps:true 
})

module.exports = mongoose.model("publication",publicationSchema);