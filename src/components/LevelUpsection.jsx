import React from "react";
import footerData from "../ui_component.json";

export default function LevelUpsection() {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto mb-10 flex flex-col lg:flex-row justify-between gap-8">
      {/* Left Section */}
      <div className="lg:w-1/2">
        <h3 className="p-0 m-0 font-sans text-3xl md:text-4xl font-bold leading-8 md:leading-tight mb-5">
          {footerData?.fifth?.content?.before_highlight}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-600 inline-block">
            {footerData?.fifth?.content?.highlight}
          </span>{" "}
          {footerData?.fifth?.content?.after_highlight}
        </h3>
        <p className="p-0 m-0 font-sans text-lg md:text-xl leading-6 md:leading-8 font-medium mb-7 text-gray-500">
          {footerData?.fifth?.content?.description}
        </p>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2">
        {footerData?.fifth?.content?.steps?.map((item, index) => (
          <div key={index} className="flex items-center gap-5 mb-5">
            <div className="w-12">
              <img
                className="w-full"
                src={item?.icon}
                alt={`Step ${index + 1}`}
              />
            </div>
            <div>
              <p className="text-lg font-bold mb-1">{item?.title}</p>
              <p className="text-sm md:text-base text-gray-500">
                {item?.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
