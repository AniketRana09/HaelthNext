import React from "react";
import { assets } from "../assets/assets";
const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl py-10 text-gray-500  ">
        <h2>
          Contact <span className="font-semibold text-gray-700">Us</span>
        </h2>
      </div>
      <div className="flex flex-col md:flex-row w-full md:max-w-[75%]  justify-center mb-36 px-5 ">
        <img className="w-full md:max-w-[360px]" src={assets.contact_image} />
        <div className="flex flex-col gap-6 p-5 ">
          <p className="font-semibold text-lg text-gray-600">Our Office</p>
          <p className=" text-gray-500">
            54709 Willms Station Suite 350, Washington, USA
          </p>
          <p className=" text-gray-500">Tel: (415) 555‑0132</p>
          <p className=" text-gray-500">Email: aniketrana@gmail.com</p>
          <p className=" text-gray-700 font-medium text-lg">
            Careers at Health Nest
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings
          </p>
          <button className="border p-3 m-3 hover:bg-blue-500 hover:text-white transition-all duration-500">
            Explore More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
