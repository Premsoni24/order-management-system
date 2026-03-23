


import React, { useState } from "react";

export default function App() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    service: "A",
    slot: "Today Evening",
  });

  const [orders, setOrders] = useState([]);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = () => {
    if (!form.name.trim() || !form.phone.trim()) {
      setError("Name and Phone are required!");
      return;
    }

    setOrders([...orders, { ...form, id: Date.now() }]);

    setForm({
      name: "",
      phone: "",
      address: "",
      service: "A",
      slot: "Today Evening",
    });
  };

  const handleDelete = (id) => {
    setOrders(orders.filter((o) => o.id !== id));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        🚀 Order Management Dashboard
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>
        
        {/* LEFT - FORM */}
        <div style={{
          flex: 1,
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>📦 Create Order</h2>

          <input name="name" placeholder="Customer Name"
            value={form.name} onChange={handleChange}
            style={inputStyle}
          />

          <input name="phone" placeholder="Phone Number"
            value={form.phone} onChange={handleChange}
            style={inputStyle}
          />

          <input name="address" placeholder="Address"
            value={form.address} onChange={handleChange}
            style={inputStyle}
          />

          <select name="service" value={form.service}
            onChange={handleChange} style={inputStyle}>
            <option value="A">Service A</option>
            <option value="B">Service B</option>
          </select>

          <select name="slot" value={form.slot}
            onChange={handleChange} style={inputStyle}>
            <option>Today Evening</option>
            <option>Tomorrow Morning</option>
          </select>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button onClick={handleSubmit} style={buttonStyle}>
            Create Order
          </button>
        </div>

        {/* RIGHT - LIST */}
        <div style={{
          flex: 1,
          border: "1px solid #ddd",
          padding: "20px",
          borderRadius: "10px"
        }}>
          <h2>📋 Orders</h2>

          {orders.length === 0 ? (
            <p>No orders yet</p>
          ) : (
            orders.map((o) => (
              <div key={o.id} style={cardStyle}>
                <p><b>{o.name}</b></p>
                <p>{o.phone}</p>
                <p>{o.service} | {o.slot}</p>

                <button
                  onClick={() => handleDelete(o.id)}
                  style={{ color: "red", marginTop: "5px" }}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
}

// styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  margin: "8px 0",
  borderRadius: "6px",
  border: "1px solid #ccc"
};

const buttonStyle = {
  width: "100%",
  padding: "10px",
  background: "#007bff",
  color: "white",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer"
};

const cardStyle = {
  border: "1px solid #eee",
  padding: "10px",
  borderRadius: "8px",
  marginBottom: "10px"
};