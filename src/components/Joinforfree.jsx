import React from "react";
import footerData from "../ui_component.json";

export default function Joinforfree() {
  return (
    <div className="w-11/12 lg:w-4/5 mx-auto bg-gray-100/10 shadow-lg rounded-2xl py-10 text-center mb-10">
      <div className="mb-5">
        <h3 className="p-0 m-0 font-sans text-2xl md:text-3xl font-extrabold leading-8 md:leading-10">
          {footerData?.sixth?.content?.before_highlight}{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600 inline-block">
            {footerData?.sixth?.content?.highlight}
          </span>{" "}
          {footerData?.sixth?.content?.after_highlight}
        </h3>
      </div>
      <div className="w-11/12 md:w-1/2 mx-auto mb-5">
        <p className="p-0 m-0 font-sans text-base md:text-lg font-medium leading-6 md:leading-7">
          {footerData?.sixth?.content?.description}
        </p>
      </div>
      <div>
        <button className="w-60 h-14 bg-blue-600 text-white font-sans text-lg font-bold leading-6 rounded-lg px-4 py-3">
          {footerData?.sixth?.content?.btn_text}
        </button>
      </div>
    </div>
  );
}
