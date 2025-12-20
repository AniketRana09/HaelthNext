import React, { useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="p-3 mb-2 flex justify-between shadow-xl ">
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

      <div className="flex items-center gap-2 ">
        {token ? (
          <div
            onClick={() => setOpen(!open)}
            className="flex gap-2 items-center cursor-pointer  relative group"
          >
            <img src={assets.profile_pic} className="w-8 rounded-full" />
            <img src={assets.dropdown_icon} className="w-2.5" />
            {open && (
              <div className="absolute top-full right-0 mt-2  font-medium text-base text-gray-600  z-10  md:hidden md:group-hover:block">
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
            )}
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
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={assets.menu_icon}
        />
        {/* {--------Mobile Menu-------------} */}
        <div
          className={`fixed md:hidden right-0 top-0 bottom-0 z-20 bg-white overflow-hidden transition-all duration-200 ${
            showMenu ? "w-full" : "w-0"
          }`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-1/2" src={assets.logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={assets.cross_icon}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium text-black">
            <NavLink
              className="px-4 py-2 inline-block rounded"
              onClick={() => setShowMenu(false)}
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className="px-4 py-2 inline-block rounded"
              onClick={() => setShowMenu(false)}
              to="/doctors"
            >
              All Doctors
            </NavLink>
            <NavLink
              className="px-4 py-2 inline-block rounded"
              onClick={() => setShowMenu(false)}
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className="px-4 py-2 inline-block rounded"
              onClick={() => setShowMenu(false)}
              to="/contact"
            >
              Contact
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
