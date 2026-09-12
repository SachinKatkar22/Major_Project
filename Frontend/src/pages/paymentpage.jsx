import React, { useState } from "react";
import axios from "axios";

const loadScript = (src) => {
    return new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.onload = () => resolve(true);
        script.onerror = () => resolve(false);
        document.body.appendChild(script);
    });
};

export default function PaymentPage() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        amount: ""
    });
    const [receiptData, setReceiptData] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }

        try {
            // 1. Create order on backend
            const orderUrl = "https://major-project-dgt0.onrender.com/payment/create-order";
            const { data: order } = await axios.post(orderUrl, { amount: formData.amount });

            // 2. Open Razorpay Checkout Modal
            const options = {
                key: "YOUR_RAZORPAY_KEY_ID", // Replace with your live/test Razorpay Key ID
                amount: order.amount,
                currency: order.currency,
                name: "Your Project Name",
                description: "Transaction Payment",
                order_id: order.id,
                handler: async function (response) {
                    try {
                        const verifyUrl = "https://major-project-dgt0.onrender.com/payment/verify";
                        const { data } = await axios.post(verifyUrl, {
                            razorpay_order_id: response.razorpay_order_id,
                            razorpay_payment_id: response.razorpay_payment_id,
                            razorpay_signature: response.razorpay_signature,
                            firstName: formData.firstName,
                            lastName: formData.lastName,
                            email: formData.email,
                            amount: formData.amount
                        });
                        setReceiptData(data.payment);
                        alert("Payment successful and saved!");
                    } catch (err) {
                        console.error(err);
                        alert("Payment verification failed on server.");
                    }
                },
                prefill: {
                    name: `${formData.firstName} ${formData.lastName}`,
                    email: formData.email,
                },
                theme: { color: "#3399cc" }
            };

            const paymentObject = new window.Razorpay(options);
            paymentObject.open();
        } catch (error) {
            console.error(error);
            alert("Could not initiate payment process.");
        }
    };

    return (
        <div style={{ maxWidth: "500px",margin:" auto", paddingTop: "100px", fontFamily: "sans-serif" }}>
            {!receiptData ? (
                <form onSubmit={handlePayment} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <h2>Secure Payment Form</h2>
                    <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required style={{ padding: "10px" }} />
                    <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required style={{ padding: "10px" }} />
                    <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required style={{ padding: "10px" }} />
                    <input type="number" name="amount" placeholder="Amount (INR)" value={formData.amount} onChange={handleChange} required style={{ padding: "10px" }} />
                    <button type="submit" style={{ padding: "12px", background: "#3399cc", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold" }}>Pay Now</button>
                </form>
            ) : (
                <div id="receipt" style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
                    <h3>Payment Receipt</h3>
                    <p><strong>Name:</strong> {receiptData.firstName} {receiptData.lastName}</p>
                    <p><strong>Email:</strong> {receiptData.email}</p>
                    <p><strong>Amount Paid:</strong> ₹{receiptData.amount}</p>
                    <p><strong>Payment ID:</strong> {receiptData.paymentId}</p>
                    <p><strong>Order ID:</strong> {receiptData.orderId}</p>
                    <p><strong>Year:</strong> {receiptData.year}</p>
                    <button onClick={() => window.print()} style={{ padding: "10px 15px", background: "green", color: "#white", border: "none", cursor: "pointer" }}>
                        Download / Print Receipt
                    </button>
                </div>
            )}
        </div>
    );
}