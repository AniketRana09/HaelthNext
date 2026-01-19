import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { AdminContext } from "../context/AdminContext";
import axios from "axios";
import { toast } from "react-toastify";
const Login = () => {
  const [state, setState] = useState("Admin");
  const { setAToken, backendUrl } = useContext(AdminContext);
  const [email, setEmail] = useState("admin@healthnest.com");
  const [password, setPassword] = useState("qwerty123");
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (state === "Admin") {
        const { data } = await axios.post(backendUrl + "/api/admin/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("aToken", data.token);
          console.log("Token : " + data.token);
          setAToken(data.token);
          toast.success("Toast is working!");
        } else {
        }
      } else {
      }
    } catch (error) {
      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Login failed");
        console.log("Backend error:", error.response.data);
      } else {
        toast.error("Server error. Try again later");
        console.log(error);
      }
    }
  };
  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border-t-0 rounded-xl text-sm shadow-lg text-[#5E5E5E]">
        <p className=" text-2xl font-semibold m-auto">
          <span className=" text-blue-500">{state}</span> Login
        </p>
        <div className="w-full">
          <p>Email</p>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-400 rounded w-full p-2 mt-1"
            type="email"
            required
          ></input>
        </div>
        <div className="w-full">
          <p>Password</p>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-400 rounded w-full p-2 mt-1"
            type="password"
            required
          ></input>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white font-semibold py-2 text-base rounded-md"
        >
          Login
        </button>
        {state === "Admin" ? (
          <p>
            Doctor Login{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setState("Doctor")}
            >
              click here
            </span>
          </p>
        ) : (
          <p>
            Admin Login{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={() => setState("Admin")}
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;
