import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Navbar";
import Dashboard from "./components/MainContent";
import Product from "./pages/Product";
import Materials from "./pages/Materials";
import Employees from "./pages/Employee";
import Customers from "./pages/Customer";
import Reports from "./pages/Report";
import "./styles/styles.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`app-container ${isOpen ? "sidebar-expanded" : "sidebar-collapsed"}`}>
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />
      <div className="main-content">
        <Header />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
          <Route path="/materials" element={<Materials />} />
          <Route path="/employee" element={<Employees />} />
          <Route path="/customer" element={<Customers />} />
          <Route path="/report" element={<Reports />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
