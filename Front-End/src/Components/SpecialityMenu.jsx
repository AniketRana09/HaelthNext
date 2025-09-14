import React from "react";
import { specialityData } from "../assets/assets";
import { Link } from "react-router-dom";
const SpecialityMenu = () => {
  return (
    <div
      id="speciality"
      className="flex flex-col items-center gap-4 text-gray-800 pt-4 py-8"
    >
      <h2 className="text-3xl text-center font-medium">Find by Speciality</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trused doctors,schedule your
        appointments
      </p>
      <div className="w-3/4 flex  justify-center  gap-5 pt-5 overflow-hidden overflow-x-scroll  scrollbar-hide">
        {specialityData.map((item, index) => (
          <Link
            key={index}
            to={`/doctors/${item.speciality}`}
            onClick={() => scrollTo(0, 0)}
            className="flex flex-col items-center text-xs sm:text-sm md:text-base min-w-[100px] sm:min-w-[150px] md:min-w-[180px] hover:translate-y-[-10px] transition-all duration-500"
          >
            <img
              className="w-16 sm:w-20 md:w-24 h-auto"
              src={item.image}
              alt=""
            />
            <p className="mt-2">{item.speciality}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SpecialityMenu;
