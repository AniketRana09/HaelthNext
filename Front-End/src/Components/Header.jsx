import React from "react";
import { assets } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-500 md:pt-16 pt-8 rounded-lg flex flex-col md:flex-row items-center justify-between md:mx-8 mx-3 ">
      {/* Left Side */}
      <div className="w-full md:w-1/2 md:ml-20 max-w-lg text-center md:text-left">
        <h2 className="font-semibold text-3xl md:text-5xl lg:text-6xl tracking-wide text-white">
          The Best <span className="text-orange-400"> Medical</span> Services
        </h2>
        <br />
        <h3 className="text-white md:text-2xl">
          Trusted Doctors & Trusted Health
        </h3>
        <div className="flex flex-col m-2 p-4">
          <img
            src={assets.group_profiles}
            onClick={() => navigate("/doctors")}
            className="md:w-32 w-24 cursor-pointer"
            alt=""
          />
          <p className="text-gray-300 font-semibold">
            Simply Browse through Our Trusted Doctors
          </p>
        </div>
        <a
          href="#speciality"
          className="bg-white p-3 my-3 text-black inline-flex rounded-2xl"
        >
          Book Appointment{" "}
          <img src={assets.arrow_icon} className="w-5 h-5 ml-2" />
        </a>
      </div>

      {/* Right Side */}
      <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
        <img
          src={assets.header_img}
          alt="Medical Service"
          className="w-full  md:max-w-3/4 rounded-lg opacity-0 transition-opacity duration-700"
          onLoad={(e) => e.currentTarget.classList.remove("opacity-0")}
        />
      </div>
    </div>
  );
};

export default Header;
