import React, { useContext } from "react";
import Login from "./pages/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AdminContext } from "./context/AdminContext";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import AllAppointment from "./pages/Admin/AllAppointment";
import AddDoctor from "./pages/Admin/AddDoctor";
import DoctorList from "./pages/Admin/DoctorList";

const App = () => {
  const { aToken } = useContext(AdminContext);
  return aToken ? (
    <div>
      <ToastContainer />
      <Navbar />
      <div className="flex items-start">
        <Sidebar />
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/admin-dashboard" element={<Dashboard />}></Route>
          <Route path="/all-appointment" element={<AllAppointment />}></Route>
          <Route path="/add-doctor" element={<AddDoctor />}></Route>
          <Route path="/doctor-list" element={<DoctorList />}></Route>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
