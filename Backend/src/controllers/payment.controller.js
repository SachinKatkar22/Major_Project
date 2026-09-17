const ImageKit = require("imagekit");
const ManualPayment = require("../models/payment.model");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

// Submit payment with file upload
async function submitPayment(req, res) {
    try {
        const { name } = req.body;
        const file = req.file;

        if (!name || !file) {
            return res.status(400).json({ error: "Name and payment screenshot are required." });
        }

        // Upload image buffer to ImageKit
        imagekit.upload({
            file: file.buffer, // required
            fileName: `payment_${Date.now()}_${file.originalname}`, // required
            folder: "/payments"
        }, async function(error, result) {
            if (error) {
                console.error("ImageKit Upload Error:", error);
                return res.status(500).json({ error: "Failed to upload image to ImageKit." });
            }

            // Save record to MongoDB with ImageKit URL
            const newPayment = new ManualPayment({
                name,
                imageurl: result.url
            });

            await newPayment.save();
            res.status(201).json({ message: "Payment submitted successfully!", payment: newPayment });
        });

    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: "Server error while processing payment." });
    }
}

async function getAllPayments(req, res) {
    try {
        const payments = await ManualPayment.find().sort({ date: -1 });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: "Server error while fetching payments." });
    }
}

module.exports = { submitPayment, getAllPayments };