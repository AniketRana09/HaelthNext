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
      <img src={userData.image} alt="" />
      {isEdit ? (
        <input
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p>{userData.name}</p>
      )}
      <hr />
      <div>
        <p>CONTACT INFORMATION</p>
        <div>
          <p>Email id:</p>
          <p>{userData.email}</p>
          <p>Phone:</p>
          {isEdit ? (
            <input
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p>{userData.phone}</p>
          )}
          <p>Address:</p>
          {isEdit ? (
            <p>
              <input
                type="text"
                value={userData.address.line1}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
              />
              <br />
              <input
                type="text"
                value={userData.address.line2}
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
              />
            </p>
          ) : (
            <p>
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      {/* Basic Information */}
      <div>
        <p>Basic Information</p>
        <div>
          <p>Gender:</p>
          {isEdit ? (
            <select
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p>{userData.gender}</p>
          )}
          <p>Birthday:</p>
          {isEdit ? (
            <input
              value={userData.dob}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              type="date"
            ></input>
          ) : (
            <p>{userData.dob}</p>
          )}
        </div>
      </div>
      <div>
        {isEdit ? (
          <button
            onClick={() => setIsEdit(false)}
            className="border border-blue-400 m-2 py-1 px-4 rounded-xl"
          >
            Save information
          </button>
        ) : (
          <button
            onClick={() => setIsEdit(true)}
            className="border border-blue-400 m-2 py-1 px-4 rounded-xl"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default MyProfile;
