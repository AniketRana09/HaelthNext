import React from "react";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <div className=" bg-blue-500 flex  px-6 sm:px-10 md:px-14 lg:px-12 my-20  md:mx-10 rounded-2xl">
      <div className="flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5">
        <h2 className="md:text-3xl sm:text-2xl lg:text-5xl text-white font-semibold mb-4">
          Book Appointment
        </h2>
        <h2 className="md:text-4xl lg:text-6xl sm:3xl text-white font-semibold mb-3">
          With 100+ Trusted Doctors
        </h2>
        <button className="bg-white px-3 py-2 rounded-2xl">
          Create account
        </button>
      </div>
      <div className=" w-[200px]  md:w-[300px] lg:w-[370px] relative">
        <img
          className=" w-full absolute bottom-0 right-0 max-w-md"
          src={assets.appointment_img}
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
