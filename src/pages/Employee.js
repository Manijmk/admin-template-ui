import React, { useState } from "react";
import "./Employee.css";

const Employees = () => {
  const [activeTab, setActiveTab] = useState("add");
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Jhon Kumar",
      role: "Main Admin",
      email: "jhon.kumar@gmail.com",
      phone: "+1 234-567-8901",
      aadhar: "KPE5687",
    },
    {
      id: 2,
      name: "Emma Smith",
      role: "Senior Developer",
      email: "emma.smith@gmail.com",
      phone: "+44 7890 123456",
      aadhar: "KPE5686",
    },
    {
      id: 3,
      name: "Raj Kumar",
      role: "Designer",
      email: "raj.kumar@gmail.com",
      phone: "+61 412 345 678",
      aadhar: "KPE5685",
    },
    {
      id: 4,
      name: "Sophia James",
      role: "3D Designer",
      email: "sophia.james@gmail.com",
      phone: "+91 87654 32109",
      aadhar: "KPE5684",
    },
    {
      id: 5,
      name: "Alex Patel",
      role: "3D Designer",
      email: "alex.patel@gmail.com",
      phone: "+1 987-654-3210",
      aadhar: "KPE5683",
    },
    {
      id: 6,
      name: "Priya Sharma",
      role: "Senior Developer",
      email: "priya.sharma@gmail.com",
      phone: "+44 7700 900123",
      aadhar: "KPE5682",
    },
    {
      id: 7,
      name: "David Wilson",
      role: "Junior Developer",
      email: "david.wilson@gmail.com",
      phone: "+61 423 678 910",
      aadhar: "KPE5681",
    },
    {
      id: 8,
      name: "Lisa Brown",
      role: "Admin",
      email: "lisa.brown@gmail.com",
      phone: "+91 96543 21098",
      aadhar: "KPE5680",
    },
    {
      id: 9,
      name: "Michael Jhon",
      role: "3D Designer",
      email: "michael.johnson@gmail.com",
      phone: "+1 345-678-9012",
      aadhar: "KPE5679",
    },
  ]);

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
        <form className="employee-form">
          <div className="form-group">
            <label>Employee ID</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Employee Name</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Aadhar Number</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Education</label>
            <input type="text" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Enter" required />
          </div>

          <div className="form-group">
            <label>Role</label>
            <input type="text" placeholder="Enter" required />
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button type="submit" className="save-btn">
              Save
            </button>
            <button type="button" className="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      )}

      {activeTab === "view" && (
        <div className="employee-list">
          {employees.map((emp) => (
            <div className="employee-card" key={emp.id}>
              <div className="employee-header">
                <div className="employee-avatar">
                  <span>👤</span>
                </div>
                <div className="employee-info">
                  <h3>{emp.name}</h3>
                  <p className="role">{emp.role}</p>
                </div>
              </div>

              <hr />
              <p className="email">📧 {emp.email}</p>
              <p className="phone">📞 {emp.phone}</p>
              <p className="aadhar">🔑 {emp.aadhar}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Employees;
