import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import "../../src/App.css";

// const Sidebar = ({ isOpen, toggleSidebar }) => {
//   return (
//     <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
//       <button className="toggle-btn" onClick={toggleSidebar}>
//         {isOpen ? "Close" : "☰"}
//       </button>
//       <nav>
//         <h2>Menu</h2>
//         <Link to="/">Dashboard</Link>
//         <Link to="/product">Product</Link>
//         <Link to="/materials">Materials</Link>
//         <Link to="/employee">Employees</Link>
//         <Link to="/customer">Customers</Link>
//         <Link to="/report">Reports</Link>
//       </nav>
//     </div>
//   );
// };

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
      <button className="toggle-btn" onClick={toggleSidebar}>
        {isOpen ? "<<" : ">>"}
      </button>
      <ul>
        <li>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/product" className={({ isActive }) => (isActive ? "active" : "")}>Product</NavLink>
        </li>
        <li>
          <NavLink to="/materials" className={({ isActive }) => (isActive ? "active" : "")}>Materials</NavLink>
        </li>
        <li>
          <NavLink to="/employee" className={({ isActive }) => (isActive ? "active" : "")}>Employee</NavLink>
        </li>
        <li>
          <NavLink to="/customer" className={({ isActive }) => (isActive ? "active" : "")}>Customer</NavLink>
        </li>
        <li>
          <NavLink to="/report" className={({ isActive }) => (isActive ? "active" : "")}>Report</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
