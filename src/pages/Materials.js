import React, { useState } from "react";
import "./Materials.css";

const Materials = () => {
  const [formData, setFormData] = useState({
    dateOfPurchase: "",
    productID: "",
    productName: "",
    companyName: "",
    quantity: "",
    price: "",
    total: "",
  });

  const [activeTab, setActiveTab] = useState("add");

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Automatically calculate total (quantity * price)
    if (name === "quantity" || name === "price") {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
        total: name === "price" ? value * prev.quantity : prev.price * value,
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Material Saved!");
  };

  // Handle form reset
  const handleReset = () => {
    setFormData({
      dateOfPurchase: "",
      productID: "",
      productName: "",
      companyName: "",
      quantity: "",
      price: "",
      total: "",
    });
  };

  return (

    <div className="employee-container">
      {/* Tabs: Add & View */}
      <div className="tab-container">
        <button
          className={`tab-button ${activeTab === "add" ? "active" : ""}`}
          onClick={() => setActiveTab("add")}
        >
          Add
        </button>
        <button
          className={`tab-button ${activeTab === "view" ? "active" : ""}`}
          onClick={() => setActiveTab("view")}
        >
          View
        </button>
      </div>

      {/* Employee Form */}
      {activeTab === "add" && (

        <div className="material-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Date of Purchase</label>
              <input type="date" required />
            </div>

            <div className="form-group">
              <label>Product ID</label>
              <input type="text" placeholder="Enter Product ID" required />
            </div>

            <div className="form-group">
              <label>Product Name</label>
              <input type="text" placeholder="Enter Product Name" required />
            </div>

            <div className="form-group">
              <label>Name of the Company</label>
              <input type="text" placeholder="Enter Company Name" required />
            </div>

            <div className="form-group">
              <label>Quantity</label>
              <input type="text" placeholder="Enter Quantity" required />
            </div>

            {/* Price and Total Fields */}
            <div className="price-total">
              <div>
                <label>Price</label>
                <input type="text" placeholder="Rs. XX,XXX" />
              </div>
              <div>
                <label>Total</label>
                <input type="text" placeholder="Rs. XX,XXX" />
              </div>
            </div>

            {/* Save & Cancel Buttons */}
            <div className="button-group">
              <button type="submit" className="save-btn">
                Save
              </button>
              <button type="button" className="cancel-btn">
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {activeTab === "view" && (
        <>
          <p>The view content is shown here .....</p>
        </>
      )}

    </div>
  );
};

export default Materials;
