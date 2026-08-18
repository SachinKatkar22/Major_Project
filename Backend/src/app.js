const express = require("express")
const cors = require("cors")
const noteModel = require("./models/note.model")
const galleryRoutes = require("./routes/galleryRoutes")
const moneyRoutes = require("./routes/moneyRoutes");

const app = express()

// 1. Enable CORS first so preflight requests succeed for all routes
app.use(cors({
  origin: '*', // Or specify your Vercel URL: 'https://major-project-all.vercel.app'
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// 2. Increase body size limits to handle image uploads and parse JSON
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ limit: '50mb', extended: true }))

// 3. Define Routes after middleware
app.use("/money", moneyRoutes);

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

app.get("/test",async(req,res)=>{
    res.status(200).json({
        message:"Backend Runing"
    })
})

app.use("/gallery", galleryRoutes)

module.exports = app