const express = require("express")
const noteModel = require("./models/note.model")
const galleryRoutes = require("./routes/galleryRoutes")
const app = express()
const cors = require("cors")

// Increase body size limits to handle image uploads
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))
app.use(cors())

app.post("/note", async (req, res) => {
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
})

app.get("/note", async (req, res) => {
    const note = await noteModel.find()

    res.status(200).json({
        message: "Note Fetched Successfully",
        note: note
    })
})

app.use("/gallery", galleryRoutes)

module.exports = app