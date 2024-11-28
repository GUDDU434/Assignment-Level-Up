import React from "react";
import { FaCopyright } from "react-icons/fa";
import data from "../ui_component.json";

export default function Dailyquiz() {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mt-12 mb-10 flex flex-col-reverse lg:flex-row justify-between gap-8 p-5">
      {/* Left Content: Text */}
      <div className="w-full lg:w-1/2 p-5">
        <h3 className="p-0 m-0 font-sans text-3xl md:text-3xl font-extrabold leading-8 md:leading-10 mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 inline-block">
            {data?.fourth?.content?.highlight}
          </span>{" "}
          {data?.fourth?.content?.after_highlight}
        </h3>
        <p className="p-0 m-0 font-sans text-base md:text-lg font-medium leading-6 md:leading-7 mb-7">
          {data?.fourth?.content?.description}
        </p>

        {/* Pointers */}
        {data?.fourth?.content?.pointers?.map((item, index) => (
          <div key={index} className="w-full flex gap-2 mb-5">
            <div>
              <FaCopyright />
            </div>
            <div className="w-full">
              <p className="p-0 m-0 font-sans text-sm md:text-base font-medium leading-5 md:leading-6">
                <span className="text-purple-500">{item?.highlight}</span>{" "}
                {item?.after_highlight}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Right Content: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={data?.fourth?.img}
          alt="LevelUpImage"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
    </div>
  );
}
