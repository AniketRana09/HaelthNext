import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Navbar from "./Components/Navbar";
import Doctors from "./Pages/Doctors";
import Login from "./Pages/Login";
import MyProfile from "./Pages/MyProfile";

import Footer from "./Components/Footer";
import Appointment from "./Pages/Appointment";
import MyAppointments from "./Pages/MyAppointments";
//import { AppContext } from "./Context/AppContext";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/doctors/:speciality" element={<Doctors />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/login" element={<Login />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/appointment/:docId" element={<Appointment />} />
          <Route path="/myappointments" element={<MyAppointments />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
