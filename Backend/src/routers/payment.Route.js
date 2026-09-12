const express = require("express");
const { createOrder, verifyPayment ,getAllPayments} = require("../controllers/payment.controller");
const router = express.Router();

router.post("/create-order", createOrder);
router.post("/verify", verifyPayment);
router.get("/all", getAllPayments);

module.exports = router;