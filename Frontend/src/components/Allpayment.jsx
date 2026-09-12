import React, { useEffect, useState } from "react";
import axios from "axios";

export default function AllPayments() {
    const [payments, setPayments] = useState([]);
    const [selectedYear, setSelectedYear] = useState("All");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPayments();
    }, []);

    const fetchPayments = async () => {
        try {
            const { data } = await axios.get("https://major-project-dgt0.onrender.com/payment/all");
            setPayments(data);
            setLoading(false);
        } catch (error) {
            console.error("Error fetching payment history:", error);
            setLoading(false);
        }
    };

    // Extract unique years for the filter dropdown
    const years = ["All", ...new Set(payments.map((p) => p.year))];

    // Filter payments based on selected year
    const filteredPayments = selectedYear === "All" 
        ? payments 
        : payments.filter((p) => String(p.year) === String(selectedYear));

    if (loading) return <p style={{ textAlign: "center" }}>Loading payment records...</p>;

    return (
        <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px", fontFamily: "sans-serif" }}>
            <h2>Online Payment Records</h2>

            {/* Year Filter Section */}
            <div style={{ margin: "20px 0", display: "flex", gap: "10px", alignItems: "center" }}>
                <label htmlFor="yearFilter" style={{ fontWeight: "bold" }}>Filter by Year:</label>
                <select 
                    id="yearFilter"
                    value={selectedYear} 
                    onChange={(e) => setSelectedYear(e.target.value)}
                    style={{ padding: "8px", borderRadius: "4px" }}
                >
                    {years.map((yr, idx) => (
                        <option key={idx} value={yr}>{yr}</option>
                    ))}
                </select>
            </div>

            {/* Payments Table */}
            <div style={{ overflowX: "auto" }}>
                <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left" }}>
                    <thead>
                        <tr style={{ backgroundColor: "#f4f4f4", borderBottom: "2px solid #ddd" }}>
                            <th style={{ padding: "12px" }}>First Name</th>
                            <th style={{ padding: "12px" }}>Last Name</th>
                            <th style={{ padding: "12px" }}>Amount</th>
                            <th style={{ padding: "12px" }}>Year</th>
                            <th style={{ padding: "12px" }}>Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.length > 0 ? (
                            filteredPayments.map((payment) => (
                                <tr key={payment._id} style={{ borderBottom: "1px solid #ddd" }}>
                                    <td style={{ padding: "12px" }}>{payment.firstName}</td>
                                    <td style={{ padding: "12px" }}>{payment.lastName}</td>
                                    <td style={{ padding: "12px" }}>₹{payment.amount}</td>
                                    <td style={{ padding: "12px" }}>{payment.year}</td>
                                    <td style={{ padding: "12px" }}>{new Date(payment.createdAt).toLocaleDateString()}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="5" style={{ textAlign: "center", padding: "20px", color: "#666" }}>
                                    No payment records found for {selectedYear}.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}