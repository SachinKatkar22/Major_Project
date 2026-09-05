const noteModel = require("../models/note.model");

async function register(req, res) {
    try {
        const data = req.body;

        await noteModel.create({
            firstName: data.firstName,
            lastName: data.lastName,
            mobileNumber: data.mobileNumber, 
            amount: data.amount,
            year: data.year
        });

        res.status(201).json({
            message: "Note created Successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function data(req, res) {
    try {
        const note = await noteModel.find();

        res.status(200).json({
            message: "Note Fetched Successfully",
            note: note
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { register, data };