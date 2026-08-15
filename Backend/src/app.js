const express=require("express")
const noteModel=require("./models/note.model")
const app=express()
const cors=require("cors")

app.use(express.json())
app.use(cors())


app.post("/note",async(req,res)=>{

    const data=req.body

    await noteModel.create({
    firstName:data.firstName,
    lastName:data.lastName,
    mobileNumber:data.mobileNumber, 
    amount:data.amount,
    year:data.year
    })

    res.status(201).json({
        message:"Note created Successfully"
    })
})

app.get("/note",async(req,res)=>{

    const note=await noteModel.find()

    res.status(200).json({
        message:"Note Fetched Successfully",
        note:note
    })
})
module.exports=app