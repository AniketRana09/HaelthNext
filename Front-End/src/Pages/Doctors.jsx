import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../Context/AppContext";
const Doctors = () => {
  const { speciality } = useParams();
  console.log(speciality);
  const navigate = useNavigate();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const { doctors } = useContext(AppContext);
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };
  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);
  return (
    <div>
      <h2 className="font-medium text-gray-800 pl-8">
        Browse through the doctors specialist{" "}
      </h2>
      <div className="flex flex-col sm:flex-row justify-center gap-5 mt-5">
        <button
          onClick={() => setShowFilter((prev) => !prev)}
          className={`border ml-3 py-1 px-3  w-2/6 rounded m-2 text-sm transition-all sm:hidden ${
            showFilter ? "bg-blue-500 text-white" : ""
          }`}
        >
          Filters
        </button>
        <div
          className={` flex-col gap-4  text-sm text-gray-600 ml-5 px-5 ${
            showFilter ? "flex" : "hidden sm:flex"
          }`}
        >
          <p
            onClick={() =>
              speciality === "General physician"
                ? navigate("/doctors")
                : navigate("/doctors/General physician")
            }
            className={`w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg  transition-all cursor-pointer ${
              speciality === "General physician"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            General physician
          </p>
          <p
            onClick={() =>
              speciality === "Gynecologist"
                ? navigate("/doctors")
                : navigate("/doctors/Gynecologist")
            }
            className={`w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg  transition-all cursor-pointer ${
              speciality === "Gynecologist"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            Gynecologist
          </p>
          <p
            onClick={() =>
              speciality === "Dermatologist"
                ? navigate("/doctors")
                : navigate("/doctors/Dermatologist")
            }
            className={` w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg  transition-all cursor-pointer ${
              speciality === "Dermatologist"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            Dermatologist
          </p>
          <p
            onClick={() =>
              speciality === "Pediatricians"
                ? navigate("/doctors")
                : navigate("/doctors/Pediatricians")
            }
            className={`w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg  transition-all cursor-pointer ${
              speciality === "Pediatricians"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            Pediatricians
          </p>
          <p
            onClick={() =>
              speciality === "Neurologist"
                ? navigate("/doctors")
                : navigate("/doctors/Neurologist")
            }
            className={` w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg transition-all cursor-pointer ${
              speciality === "Neurologist"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            Neurologist
          </p>
          <p
            onClick={() =>
              speciality === "Gastrologis"
                ? navigate("/doctors")
                : navigate("/doctors/Gastrologist")
            }
            className={`w-[200px] pl-3 py-1.5 border border-gray-300 rounded-lg  transition-all cursor-pointer ${
              speciality === "Gastrologist"
                ? "bg-blue-200 text-black "
                : "bg-white text-gray-600"
            }`}
          >
            Gastrologist
          </p>
        </div>
        <div className="w-full md:w-3/4  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5">
          {filterDoc.map((items, index) => (
            <div
              key={index}
              onClick={() => navigate(`/appointment/${items._id}`)}
              className="border border-gray-100 shadow-lg rounded-lg w-80 max-w-80  mx-3 cursor-pointer hover:translate-y-[-10px] duration-500"
            >
              <img src={items.image} className=" bg-violet-200  rounded-lg" />
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
      </div>
    </div>
  );
};

export default Doctors;
