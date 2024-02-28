// const drawerWidth = 240;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import Livestock from "./components/Livestock";
import Sales from "./components/Sales";
import Employee from "./components/Employee";
import Orders from "./components/Orders";
function App() {
  return (
    <>
      <BrowserRouter>
        <div className="main">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="mainbar">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/livestock" element={<Livestock />} />
              <Route path="/sales" element={<Sales />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/employee" element={<Employee />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}
export default App;
