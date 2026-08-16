require("dotenv").config()
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()

// Use Render's assigned port dynamically or fallback to 3000 for local development
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})