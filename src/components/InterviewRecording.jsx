import React from "react";
import { FaCopyright } from "react-icons/fa";
import data from "../ui_component.json";

export default function InterviewRecording() {
  return (
    <div className="w-9/12  mx-auto mt-12 mb-10 flex flex-col lg:flex-row justify-between gap-8">
      {/* Left Content: Image */}
      <div className="w-full lg:w-1/2">
        <img
          src={data?.third?.img}
          alt="DSA Interview"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>

      {/* Right Content: Text */}
      <div className="w-full lg:w-1/2 p-5">
        <h3 className="p-0 m-0 font-sans text-3xl md:text-3xl font-extrabold leading-8 md:leading-10 mb-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 inline-block">
            {data?.third?.content?.highlight}
          </span>{" "}
          {data?.third?.content?.after_highlight}
        </h3>

        <p className="p-0 m-0 font-sans text-base md:text-lg font-medium leading-6 md:leading-7 mb-7">
          {data?.third?.content?.description}
        </p>

        {/* Pointers */}
        <div className="w-full flex gap-2 mb-5">
          <div>
            <FaCopyright />
          </div>
          <div className="w-full">
            <p className="p-0 m-0 font-sans text-sm md:text-base font-medium leading-5 md:leading-6">
              {data?.third?.content?.pointers?.[0]?.before_highlight}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 inline-block">
                {data?.third?.content?.pointers?.[0]?.highlight}
              </span>{" "}
              {data?.third?.content?.pointers?.[0]?.after_highlight}
            </p>
          </div>
        </div>

        <div className="w-full flex gap-2">
          <div>
            <FaCopyright />
          </div>
          <div className="w-full">
            <p className="p-0 m-0 font-sans text-sm md:text-base font-medium leading-5 md:leading-6">
              {data?.third?.content?.pointers?.[1]?.before_highlight}{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-green-500 inline-block">
                {data?.third?.content?.pointers?.[1]?.highlight}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
