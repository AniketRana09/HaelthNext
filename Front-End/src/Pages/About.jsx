import React from "react";
import { assets } from "../assets/assets";
const About = () => {
  return (
    <div>
      <h2 className="text-center text-2xl py-8 text-gray-600">
        About <span className="font-medium  text-gray-800">Us</span>
      </h2>
      <div className="flex flex-col md:flex-row justify-center my-10  gap-12">
        <img className="w-full md:max-w-[360px]" src={assets.about_image} />
        <div className="flex flex-col p-5  gap-6 md:w-2/4 text-sm text-gray-600">
          <p>
            Welcome to Prescripto, your trusted partner in managing your
            healthcare needs conveniently and efficiently. At Prescripto, we
            understand the challenges individuals face when it comes to
            scheduling doctor appointments and managing their health records.
          </p>
          <p>
            Prescripto is committed to excellence in healthcare technology. We
            continuously strive to enhance our platform, integrating the latest
            advancements to improve user experience and deliver superior
            service. Whether you're booking your first appointment or managing
            ongoing care, Prescripto is here to support you every step of the
            way.
          </p>
          <p className="text-gray-800 font-medium">Our Vision</p>
          <p>
            Our vision at Prescripto is to create a seamless healthcare
            experience for every user. We aim to bridge the gap between patients
            and healthcare providers, making it easier for you to access the
            care you need, when you need it.
          </p>
        </div>
      </div>

      <div className="my-8">
        <p className="text-2xl font-semibold ml-24  text-gray-600">
          WHY <span className="text-gray-800">CHOOSE US</span>
        </p>
      </div>
      <div className="flex  flex-col md:flex-row gap-5 text-[15px] justify-center text-gray-600 m-10">
        <div className=" border border-gray-700 py-14 px-10">
          <b className="text-gray-800 my-3"> EFFICIENCY:</b>
          <p className="my-3">
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>
        <div className=" border border-gray-700 py-14 px-10">
          <b className="text-gray-800">CONVENIENCE:</b>
          <p className="my-3">
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>
        <div className=" border border-gray-700 py-14 px-10">
          <b className="text-gray-800">PERSONALIZATION:</b>
          <p className="my-3">
            Tailored recommendations and reminders to help you stay on top of
            your healt
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
