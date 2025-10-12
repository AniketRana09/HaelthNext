import React from "react";
import { assets } from "../assets/assets";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className=" w-full bg-white ">
      <div className="md:flex md:justify-between   shadow-lg border border-gray-100 my-4 md:py-8 sm:md-4 md:px-8 rounded-lg">
        {/* ----- 1st col----- */}
        <div>
          <img src={assets.logo} className="w-52" alt="" />
          <p className="text-sm text-gray-700">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ipsa
            vero maxime alias nesciunt! Possimus id eveniet error sed laboriosam
            qui illum pariatur
          </p>
        </div>
        {/* ---- 2nd Col--- */}
        <div>
          <h2 className="font-medium text-gray-700">COMPANY</h2>
          <ul>
            <NavLink onClick={() => scrollTo(0, 0)} to={"/"}>
              <li className="text-gray-600">Home</li>
            </NavLink>
            <NavLink to={"/about"}>
              <li className="text-gray-600">About us</li>
            </NavLink>
            <NavLink to={"/contact"}>
              <li className="text-gray-600">Contact us</li>
            </NavLink>
            <NavLink>
              <li className="text-gray-600">Privacy policy</li>
            </NavLink>
          </ul>
        </div>

        {/* --- 3rd Col---- */}

        <div>
          <h2 className="font-medium text-gray-700">GET IN TOUCH</h2>
          <p className="text-gray-600">+91 12354546</p>
          <p className="text-gray-600">AniketRana@github</p>
        </div>
      </div>
      <p className="text-gray-700 text-center text-sm">
        Copyright &copy; 2025 HealtNest-All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
