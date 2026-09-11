// const mongoose=require("mongoose")

// const notschema= new mongoose.Schema({
//     firstName:String,
//     lastName:String,
//     mobileNumber:Number, 
//     amount:Number,
//     year:String
    
// })



// const noteModel=mongoose.model("note",notschema)

// module.exports=noteModel
const mongoose = require("mongoose");

const notschema = new mongoose.Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    mobileNumber: { type: String, required: true }, 
    amount: { type: Number, required: true },
    year: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const noteModel = mongoose.model("note", notschema);

module.exports = noteModel;