import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="p-3 mb-2 flex justify-between shadow-2xl ">
      <div>
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          className="w-52 cursor-pointer"
        />
      </div>

      <ul className="hidden md:flex  gap-5 font-medium items-center">
        <NavLink to="/">
          <li className="py-1">Home</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/about">
          <li className="py-1">About</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/doctors">
          <li className="py-1">All Doctors</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
        </NavLink>
        <NavLink to="/contact">
          <li className="py-1">Contact</li>
          <hr className="border-none outline-none h-0.5 bg-blue-600 w-3/5 m-auto hidden" />
        </NavLink>
      </ul>

      <div className="flex items-center gap-2">
        {token ? (
          <div className="flex gap-2 items-center cursor-pointer  relative group">
            <img src={assets.profile_pic} className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} className="w-2.5" />
            <div className="absolute top-0 right-0 pt-20 font-medium text-base text-gray-600  z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4 ">
                <p
                  onClick={() => navigate("/myprofile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/myappointments")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointments
                </p>
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-black cursor-pointer"
                >
                  LogOut
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            className="bg-blue-600 text-white p-2 rounded-3xl "
            onClick={() => {
              navigate("/login");
            }}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
