const mongoose=require("mongoose")

const notschema= new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobileNumber:Number, 
    amount:Number,
    year:Date
    
})
const noteModel=mongoose.model("note",notschema)

module.exports=noteModel