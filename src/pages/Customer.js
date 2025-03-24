import { useState } from "react";
import "./Customer.css";


const Customers = () => {
  const [viewMode, setViewMode] = useState("view");

  const customers = [
    { name: "Floyd Miles", company: "DAV Boys", phone: "(205) 555-0107", email: "floyd@gmail.com", city: "Chennai", status: "Inactive" },
    { name: "Ronald Richards", company: "Sishya", phone: "(302) 555-0107", email: "ronald@gmail.com", city: "Chennai", status: "Inactive" },
    { name: "Marvin McKinney", company: "Hindu Senior", phone: "(252) 555-0126", email: "marvin@gmail.com", city: "Chennai", status: "Active" },
    { name: "Jerome Bell", company: "Vidya Mandir", phone: "(629) 555-0129", email: "jerome@gmail.com", city: "Chennai", status: "Active" },
  ];


  return (
    <div className="customer-container">
      {/* Toggle Buttons */}
      <div className="tab-container">
        <button
          className={`tab-button ${viewMode === "add" ? "active" : ""}`}
          onClick={() => setViewMode("add")}
        >
          Add
        </button>
        <button
          className={`tab-button ${viewMode === "view" ? "active" : ""}`}
          onClick={() => setViewMode("view")}
        >
          View
        </button>
      </div>

      {/* Form Section */}
      {viewMode === "add" && (
        <form className="customer-form">
          <div className="form-group">
            <label>Customer ID</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Customer Name</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Company Name</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>City</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="button-group">
            <button className="save-button">Save</button>
            <button className="cancel-button">Cancel</button>
          </div>
        </form>
      )}

      {/* View Section (Placeholder) */}
      {viewMode === "view" && (
        <div className="customer-table-container">
          <div className="customer-header">
            <h2>All Customers</h2>
            {/* <button className="add-customer-button" onClick={() => setViewMode("add")}>
              Add Customer
            </button> */}
          </div>
          <table className="customer-table">
            <thead>
              <tr>
                <th>Customer Name</th>
                <th>Company</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>City</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((customer, index) => (
                <tr key={index}>
                  <td>{customer.name}</td>
                  <td>{customer.company}</td>
                  <td>{customer.phone}</td>
                  <td>{customer.email}</td>
                  <td>{customer.city}</td>
                  <td>
                    <span className={`status ${customer.status.toLowerCase()}`}>
                      {customer.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Customers;
