import React, { useState } from "react";
import { assets } from "../assets/assets";
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Aniket Rana",
    image: assets.profile_pic,
    email: "aniketrana@gmail.com",
    phone: "+91 1234567899",
    address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London",
    },
    gender: "Male",
    dob: "2003-10-09",
  });
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div>
      <img src={userData.image} alt="" onChange={(e) => setUserData()} />
      {isEdit ? <input type="text" /> : <p>{userData.name}</p>}
    </div>
  );
};

export default MyProfile;
