import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../Context/AppContext";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h2 className="font-medium text-3xl">Top Doctors to Book</h2>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted docotors
      </p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-5 gap-5 ">
        {doctors.slice(0, 10).map((items, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${items._id}`)}
            className="border border-gray-100 shadow-lg rounded-lg w-56 max-w-60 m-3 cursor-pointer hover:translate-y-[-10px] duration-500"
          >
            <img src={items.image} className=" bg-violet-200 rounded-lg" />
            <div className="m-2 p-2">
              <div className="flex items-center ml-2">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="text-gray-700 ml-2">Available</p>
              </div>
              <p className="font-medium">{items.name}</p>
              <p className="text-gray-600">{items.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="px-12 py-3 m-3 bg-blue-200 rounded-4xl cursor-pointer"
        onClick={() => navigate("/doctors")}
      >
        more
      </button>
    </div>
  );
};

export default TopDoctors;
