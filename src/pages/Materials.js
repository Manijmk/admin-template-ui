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
    <div className="material-form">
      <div className="form-group">
        <label>Date of Purchase</label>
        <select>
          <option>Select</option>
        </select>
      </div>

      <div className="form-group">
        <label>Product ID</label>
        <select>
          <option>Select</option>
        </select>
      </div>

      <div className="form-group">
        <label>Product Name</label>
        <input type="text" placeholder="Enter" />
      </div>

      <div className="form-group">
        <label>Name of the Company</label>
        <input type="text" placeholder="Enter" />
      </div>

      <div className="form-group">
        <label>Quantity</label>
        <input type="text" placeholder="Enter" />
      </div>

      {/* Price and Total */}
      <div className="price-total">
        <div>
          <label>Price</label>
          <input type="text" placeholder="Rs. XX,XXX" disabled />
        </div>
        <div>
          <label>Total</label>
          <input type="text" placeholder="Rs. XX,XXX" disabled />
        </div>
      </div>

      {/* Buttons */}
      <div className="button-group">
        <button className="save-btn">Save</button>
        <button className="cancel-btn">Cancel</button>
      </div>
    </div>
  );
};

export default Materials;
