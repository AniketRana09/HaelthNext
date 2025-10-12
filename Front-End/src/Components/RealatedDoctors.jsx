import React, { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RealatedDoctors = ({ docId, speciality }) => {
  const { doctors } = useContext(AppContext);
  const [relDoc, setRelDoc] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id != docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);
  return (
    <div className="flex flex-col items-center gap-4 my-16 text-gray-800 md:mx-10">
      <h2 className="font-medium text-3xl">Related Doctors</h2>
      <p className="sm:w-2/3 text-center text-sm">
        Simply browse through our extensive list of trusted docotors
      </p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 ">
        {relDoc.length > 0 ? (
          relDoc.slice(0, 5).map((items, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${items._id}`);
                scrollTo(0, 0);
              }}
              className="border border-gray-100 shadow-lg rounded-lg w-56 h-72 max-w-60 m-3 cursor-pointer hover:translate-y-[-10px] duration-500"
            >
              <img
                src={items.image || "/default-doctor.png"}
                alt={items.name}
                className="bg-violet-200 rounded-lg w-full h-48 object-cover"
              />
              <div className="m-2 p-2">
                <div className="flex items-center ml-2">
                  <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                  <p className="text-gray-700 ml-2">Available</p>
                </div>
                <p className="font-medium">{items.name}</p>
                <p className="text-gray-600">{items.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 mt-4">No related doctors found.</p>
        )}
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

export default RealatedDoctors;
