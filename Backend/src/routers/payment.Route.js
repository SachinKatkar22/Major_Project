const express = require("express");
const multer = require("multer");
const { submitPayment, getAllPayments } = require("../controllers/payment.controller");
const router = express.Router();

// Configure multer for memory storage
const upload = multer({ storage: multer.memoryStorage() });

router.post("/submit", upload.single("image"), submitPayment);
router.get("/all", getAllPayments);

module.exports = router;