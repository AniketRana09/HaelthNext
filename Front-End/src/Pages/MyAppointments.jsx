import React from "react";
import { useContext } from "react";
import { AppContext } from "../Context/AppContext";
const MyAppointments = () => {
  const { doctors } = useContext(AppContext);
  return (
    <div>
      <p className=" text-3xl font-medium text-zinc-700 mt-12 m-2 pt-12 pb-4 border-b">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 2).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex xxm:gap-6 py-2 border-b w-4/5 m-auto"
            key={index}
          >
            <div>
              <img
                className="w-48  bg-violet-200 rounded object-cover border border-gray-500  "
                src={item.image}
              />
            </div>
            <div className="flex-1 text-sm text-zinc-600 py-4">
              <p className="text-neutral-800 font-semibold">{item.name}</p>
              <p>{item.speciality}</p>
              <p className="text-neutral-700 font-medium mt-1"> Address:</p>
              <p className="text-xs">{item.address.line1}</p>
              <p className="text-xs">{item.address.line2}</p>
              <p className="text-xs">
                <span>Date & Time :</span> 25 December,2025|08:30 pm
              </p>
            </div>
            <div></div>
            <div className=" flex flex-col justify-end">
              <button className="text-sm hover:bg-blue-500 hover:text-white px-8 py-4 mb-3 border rounded-xl transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm px-8 py-4 border rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300">
                Cancel appointment{" "}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyAppointments;
