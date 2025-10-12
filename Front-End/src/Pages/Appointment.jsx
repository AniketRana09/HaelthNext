import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assets, doctors } from "../assets/assets";
import { AppContext } from "../Context/AppContext";
import RealatedDoctors from "../Components/RealatedDoctors";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const daysofWeek = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");

  const fetchDocInfo = async () => {
    const docInfo = doctors.find((doc) => doc._id === docId);
    setDocInfo(docInfo);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    //Getting Current date;
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      //getting date with index
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      //setting end time of the date with index
      let endTime = new Date();
      endTime.setDate(today.getDate() + i);
      endTime.setHours(21, 0, 0, 0);

      //setting date
      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(
          currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10
        );
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }
      let timeSlots = [];
      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        //
        timeSlots.push({
          dateTime: new Date(currentDate),
          time: formattedTime,
        });

        //Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    getAvailableSlots();
  }, [docInfo]);

  useEffect(() => {
    console.log(docSlots);
  }, [docSlots]);

  return (
    docInfo && (
      <div className="pt-8 flex flex-col  items-center">
        <div className="w-full max-w-5xl flex flex-col gap-5 items-center">
          <div className="flex flex-col px-2  md:px-0 sm:flex-row gap-5 justify-center items-center">
            <div>
              <img
                src={docInfo.image}
                className=" bg-violet-200  w-full max-w-72  rounded-lg"
                alt="docimage"
              />
            </div>
            <div className="flex flex-col border border-gray-500 shadow-2xl rounded-lg p-8 bg-white">
              <p className="flex items-center gap-2 text-2xl font-medium text-gray-800">
                {docInfo.name}
                <img src={assets.verified_icon} alt="verificationimage" />
              </p>
              <div className="flex gap-2 text-gray-600 font-medium text-lg">
                <p className="tracking-widest">
                  {docInfo.degree} -{docInfo.speciality}
                </p>
                <p className=" border text-sm p-1 border-gray-500 rounded-2xl">
                  {docInfo.experience}
                </p>
              </div>
              <p className="flex gap-2">
                About
                <img src={assets.info_icon} alt="" />
              </p>

              <p className="text-sm text-gray-600 max-w-[700px]">
                {docInfo.about}
              </p>

              <p className=" text-gray-500">
                Appointment fees:
                <span className="text-black">${docInfo.fees}</span>
              </p>
            </div>
          </div>

          {/* BOOKING SLOTS */}
          <div className="w-full font-medium text-gray-700 text-center">
            <h2 className=" text-xl mb-6">Booking Slots</h2>
            <div className="flex gap-3 w-full overflow-x-scroll mt-4 scrollbar-hide justify-center">
              {docSlots.length &&
                docSlots.map((item, index) => (
                  <div
                    onClick={() => setSlotIndex(index)}
                    className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${
                      slotIndex === index
                        ? "bg-blue-500 text-white "
                        : "border border-gray-700"
                    }`}
                    key={index}
                  >
                    <p>{item[0] && daysofWeek[item[0].dateTime.getDay()]}</p>
                    <p>{item[0] && item[0].dateTime.getDate()}</p>
                  </div>
                ))}
            </div>

            {/* time Slots */}
            <div className="flex gap-3 w-full  overflow-x-auto mt-4 px-4 scrollbar-hide ">
              {docSlots.length &&
                docSlots[slotIndex].map((item, index) => (
                  <p
                    onClick={() => setSlotTime(item.time)}
                    className={`text-sm font-light flex-shrink-0 px-5 py-4 rounded-full cursor-pointer ${
                      item.time === slotTime
                        ? "bg-blue-500 text-white"
                        : "border border-gray-700"
                    }`}
                    key={index}
                  >
                    {item.time.toLowerCase()}
                  </p>
                ))}
            </div>
            {/* Book Appointment Button */}

            <div className="flex justify-center mt-8">
              <button className="bg-blue-500 text-white px-8 py-3 rounded-2xl font-medium hover:bg-blue-600 cursor-pointer transition-colors">
                Book Appointment
              </button>
            </div>
          </div>
          <RealatedDoctors docId={docId} speciality={docInfo.speciality} />
        </div>
      </div>
    )
  );
};

export default Appointment;
