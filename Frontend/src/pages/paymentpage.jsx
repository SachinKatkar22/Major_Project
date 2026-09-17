import React, { useState, useEffect } from "react";
import axios from "axios";
import QR from "../assets/QR.jpeg"


export default function ManualPaymentPage() {
    const [name, setName] = useState("");
    const [imageFile, setImageFile] = useState(null);
    const [payments, setPayments] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchPayments = async () => {
        try {
            const { data } = await axios.get("https://major-project-dgt0.onrender.com/manual-payment/all");
            setPayments(data);
        } catch (err) {
            console.error("Error fetching payments:", err);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !imageFile) {
            alert("Please provide your name and select a payment screenshot.");
            return;
        }

        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", imageFile);

        setLoading(true);
        try {
            await axios.post("https://major-project-dgt0.onrender.com/manual-payment/submit", formData, {
                headers: { "Content-Type": "multipart/form-data" }
            });
            alert("Payment proof uploaded to ImageKit and saved successfully!");
            setName("");
            setImageFile(null);
            fetchPayments(); // Refresh the list
        } catch (err) {
            console.error(err);
            alert("Failed to upload payment proof.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{ maxWidth: "600px", margin: "auto", padding: "20px", fontFamily: "sans-serif", paddingTop:"100px"}}>
            <h2 style={{marginLeft:"200px"}}>Scan & Pay</h2>
            
            {/* QR Code Section */}
            <div style={{ textAlign: "center", marginBottom: "30px", border: "1px solid #ddd", padding: "15px", borderRadius: "8px", alignItems:"center",justifyContent:"center", display:"flex" }}>
                <p style={{fontSize:"10px"}}>Scan the QR code using any UPI app:</p>
                <img 
                    src={QR} 
                    alt="Payment QR Code" 
                    style={{ width: "300px", height: "300px", objectFit: "contain" }} 
                />
              
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "40px" }}>
                <h3>Upload Payment Screenshot</h3>
                <input 
                    type="text" 
                    placeholder="Your Full Name" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)} 
                    required 
                    style={{ padding: "10px" }} 
                />
                <input 
                    type="file" 
                    accept="image/*" 
                    onChange={(e) => setImageFile(e.target.files[0])} 
                    required 
                    style={{ padding: "10px" }} 
                />
                <button 
                    type="submit" 
                    disabled={loading} 
                    style={{ padding: "12px", background: "#28a745", color: "#fff", border: "none", cursor: "pointer", fontWeight: "bold" }}
                >
                    {loading ? "Uploading to ImageKit..." : "Submit Payment Record"}
                </button>
            </form>

            <hr />

            {/* Bottom Gallery Section */}
            <div>
                <h3>All Payment Submissions</h3>
                {payments.length === 0 ? (
                    <p>No payments recorded yet.</p>
                ) : (
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: "15px", marginTop: "15px" }}>
                        {payments.map((p) => (
                            <div key={p._id} style={{ border: "1px solid #ccc", padding: "12px", borderRadius: "8px", background: "#f9f9f9" }}>
                                <p style={{ margin: "0 0 8px 0", fontWeight: "bold" }}>{p.name}</p>
                                <img 
                                    src={p.imageurl} 
                                    alt="Payment Receipt" 
                                    style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "4px" }} 
                                />
                                <p style={{ fontSize: "12px", color: "#777", marginTop: "5px" }}>
                                    {new Date(p.date).toLocaleDateString()}
                                </p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}