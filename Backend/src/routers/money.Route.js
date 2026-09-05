const express = require('express');
const MoneyHistory = require('../models/moneyModel');
const moneycontroller=require("../controllers/money.controller")
const router = express.Router();

// Get all history entries
router.get("/allmoney",moneycontroller.allmoney)

// router.get('/', async (req, res) => {
//   try {
//     const history = await MoneyHistory.find().sort({ createdAt: -1 });
//     res.status(200).json(history);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Add new entry

router.post("/add",moneycontroller.moneyadd)

// router.post('/add', async (req, res) => {
//   try {
//     const { year, text, amount } = req.body;
    
//     const newEntry = new MoneyHistory({
//       year,
//       text,
//       amount
//     });

//     await newEntry.save();
//     res.status(201).json({ message: "Added successfully", data: newEntry });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// Delete entry with password verification

router.delete("/:id",moneycontroller.moneydelet)

// router.delete('/:id', async (req, res) => {
//   try {
//     const { password } = req.body;
//     if (password !== "832969") {
//       return res.status(401).json({ error: "Incorrect password!" });
//     }

//     await MoneyHistory.findByIdAndDelete(req.params.id);
//     res.status(200).json({ message: "Deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

module.exports = router;