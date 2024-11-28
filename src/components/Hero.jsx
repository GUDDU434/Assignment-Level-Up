import React from "react";
import { Link } from "react-router-dom";
import data from "../ui_component.json";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#0F1921] via-[#1E3243] to-[#1E3243] text-white py-12 sm:py-16 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col  lg:flex-row items-center lg:w-4/5 max-w-screen-xl ">
        {/* Left Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-[28px] sm:text-[36px] md:text-[48px] lg:text-[54px] xl:text-[64px] font-bold leading-snug md:leading-tight lg:leading-tight text-left">
            {data?.first?.content?.before_highlight}{" "}
            <span className="text-green-400">
              {data?.first?.content?.highlight}
            </span>
          </h1>

          <p className="text-gray-100 text-base sm:text-lg md:text-xl lg:text-xl mt-6 md:mt-8 mb-6 lg:mb-10 lg:w-[503px]">
            {data?.first?.content?.description}
          </p>

          <Link
            to="#"
            className="bg-[#3E7BFA] text-white py-3 px-6 sm:py-4 sm:px-8 md:py-5 md:px-10 rounded-lg sm:rounded-xl text-sm sm:text-base md:text-lg font-semibold hover:bg-blue-600 transition-all"
          >
            {data?.first?.content?.btn_text}
          </Link>
        </div>

        {/* Right Content (Image with gradient shadow) */}
        <div className="lg:w-1/2 flex justify-center lg:justify-end mt-10 lg:mt-0">
          <div className="relative w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
            <img
              src={data?.first?.img}
              alt="Platform Screenshot"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
