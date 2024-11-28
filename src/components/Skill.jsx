import React from "react";
import data from "../ui_component.json";
import { FaCopyright } from "react-icons/fa";

const Skill = () => {
  return (
    <section className="w-9/12  mx-auto mt-12 mb-10 flex flex-col lg:flex-row justify-between gap-8">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
          <h1 className="text-[28px] sm:text-[36px] md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500 inline-block">
              {data?.second?.content?.highlight}{" "}
            </span>{" "}
            {data?.second?.content?.after_highlight}
          </h1>
          <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl mb-6">
            {data?.second?.content?.description}
          </p>
          <div className="flex flex-col gap-6 mb-6">
            {/* First Point */}
            <div className="flex items-start justify-center al lg:justify-start gap-4 ">
              <div>
                <FaCopyright />
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed ">
                {data?.second?.content?.pointers[0].before_highlight}
                <span className="text-orange-500">
                  {data?.second?.content?.pointers[0].highlight}
                </span>{" "}
                {data?.second?.content?.pointers[0].after_highlight}
              </p>
            </div>
            {/* Second Point */}
            <div className="flex items-start justify-center lg:justify-start gap-4">
              <div>
                <FaCopyright />
              </div>
              <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
                {data?.second?.content?.pointers[1].before_highlight}
                <span className="text-orange-500">
                  {}
                  {data?.second?.content?.pointers[1].highlight}
                </span>
                .
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="lg:w-1/2 w-full relative flex justify-center items-center">
          {/* Primary Image */}
          <img
            src={data?.second?.img}
            alt="Platform Screenshot"
            className="rounded-lg shadow-lg w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Skill;
