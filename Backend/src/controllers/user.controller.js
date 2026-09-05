const usermodule=require("../models/note.model")

async function register(req,res) {
     const data = req.body

    await noteModel.create({
        firstName: data.firstName,
        lastName: data.lastName,
        mobileNumber: data.mobileNumber, 
        amount: data.amount,
        year: data.year
    })

    res.status(201).json({
        message: "Note created Successfully"
    })
}
async function data(req,res) {
     const note = await noteModel.find()

    res.status(200).json({
        message: "Note Fetched Successfully",
        note: note
    })
}

module.exports={register,data}