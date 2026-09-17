const ImageKit = require("imagekit");
const ManualPayment = require("../models/payment.model");

const getImageKitInstance = () => {
    return new ImageKit({
        publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
        privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
        urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
    });
};

async function submitPayment(req, res) {
    try {
        const imagekit = getImageKitInstance();
        const { name } = req.body;
        const file = req.file;

        if (!name || !file) {
            return res.status(400).json({ error: "Name and image file are required." });
        }

        imagekit.upload({
            file: file.buffer,
            fileName: `payment_${Date.now()}_${file.originalname}`,
            folder: "/payments"
        }, async function(error, result) {
            if (error) {
                console.error("ImageKit Upload Error:", error);
                return res.status(500).json({ error: "Failed to upload image." });
            }

            const newPayment = new ManualPayment({
                name,
                imageurl: result.url
            });

            await newPayment.save();
            res.status(201).json({ message: "Success", payment: newPayment });
        });
    } catch (error) {
        console.error("Server Error:", error);
        res.status(500).json({ error: error.message });
    }
}

async function getAllPayments(req, res) {
    try {
        const payments = await ManualPayment.find().sort({ date: -1 });
        res.status(200).json(payments);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = { submitPayment, getAllPayments };