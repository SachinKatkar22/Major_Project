const Razorpay = require("razorpay");
const crypto = require("crypto");
const Payment = require("../models/payment.model");

async function createOrder(req, res) {
    try {
        console.log("Incoming order request body:", req.body);
        const { amount } = req.body;

        if (!amount) {
            return res.status(400).json({ error: "Amount is missing from request body." });
        }

        if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
            console.error("CRITICAL: Razorpay keys are missing from Render environment variables!");
            return res.status(500).json({ error: "Razorpay keys are missing on the server." });
        }

        const razorpay = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: Number(amount) * 100, // Amount in paise
            currency: "INR",
            receipt: `receipt_${Date.now()}`
        };
        
        const order = await razorpay.orders.create(options);
        res.status(200).json(order);
    } catch (error) {
        console.error("Razorpay Order Error Details:", error);
        res.status(500).json({ error: error.message });
    }
}

async function verifyPayment(req, res) {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature, firstName, lastName, email, amount } = req.body;

        const body = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSignature = crypto
            .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
            .update(body.toString())
            .digest("hex");

        if (expectedSignature === razorpay_signature) {
            const currentYear = new Date().getFullYear().toString();
            
            const newPayment = new Payment({
                firstName,
                lastName,
                email,
                amount,
                orderId: razorpay_order_id,
                paymentId: razorpay_payment_id,
                year: currentYear
            });

            await newPayment.save();

            res.status(200).json({
                message: "Payment verified successfully",
                payment: newPayment
            });
        } else {
            res.status(400).json({ error: "Invalid payment signature" });
        }
    } catch (error) {
        console.error("Payment Verification Error:", error);
        res.status(500).json({ error: error.message });
    }
}

async function getAllPayments(req, res) {
    try {
        const payments = await Payment.find().sort({ createdAt: -1 });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { createOrder, verifyPayment, getAllPayments };