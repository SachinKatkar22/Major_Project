const MoneyHistory = require("../models/moneyModel");

async function allmoney(req, res) {
    try {
        const history = await MoneyHistory.find().sort({ createdAt: -1 });
        res.status(200).json(history);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function moneyadd(req, res) {
    try {
        const { year, text, amount } = req.body;
        
        const newEntry = new MoneyHistory({
            year,
            text,
            amount
        });
    
        await newEntry.save();
        res.status(201).json({ message: "Added successfully", data: newEntry });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

async function moneydelet(req, res) {
    try {
        const { password } = req.body;
        if (password !== "832969") {
            return res.status(401).json({ error: "Incorrect password!" });
        }
    
        await MoneyHistory.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { allmoney, moneyadd, moneydelet };