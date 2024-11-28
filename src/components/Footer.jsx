import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import footerData from "../ui_component.json";

const Footer = () => {
  return (
    <div className="w-full bg-gray-900 text-white">
      <div className="pt-12">
        <div className="w-11/12 lg:w-4/5 mx-auto border-b border-gray-500 flex flex-col lg:flex-row justify-between gap-8 pb-8">
          {/* Left Section */}
          <div className="lg:w-1/3">
            <img
              src={`${footerData?.footer?.title}`}
              alt="Footer Logo"
              className="mb-4"
            />
            <p className="text-base leading-6 mb-4">
              {footerData?.footer?.description}
            </p>
            <div className="flex gap-4">
              {/* Social Media Icons */}
              {footerData?.footer?.social_media.map((link, index) => (
                <div
                  key={index}
                  className="w-8 h-8 flex items-center justify-center border border-white rounded-full cursor-pointer hover:bg-white hover:text-gray-900"
                  onClick={() => window.open(link)}
                >
                  {index === 0 && <FaTwitter />}
                  {index === 1 && <FaFacebook />}
                  {index === 2 && <FaInstagramSquare />}
                  {index === 3 && <FaLinkedin />}
                  {index === 4 && <FaYoutube />}
                </div>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="lg:w-1/5">
            <p className="text-blue-400 font-bold text-sm mb-2">Link</p>
            {footerData?.footer?.links.map((link, i) => (
              <p
                key={i}
                className="pl-4 text-sm leading-6 font-medium cursor-pointer hover:text-blue-400"
                onClick={() => window.open(link?.link)}
              >
                {link?.link_name}
              </p>
            ))}
          </div>

          {/* Company Section */}
          <div className="lg:w-1/5">
            <p className="text-blue-400 font-bold text-sm mb-2">Company</p>
            {footerData?.footer?.company.map((link, i) => (
              <p
                key={i}
                className="pl-4 text-sm leading-6 font-medium cursor-pointer hover:text-blue-400"
                onClick={() => window.open(link?.link)}
              >
                {link?.link_name}
              </p>
            ))}
          </div>
        </div>
        <p className="text-center py-4 text-gray-400 pl-4 text-sm">
          © Copyright 2023, All Rights Reserved by LevelUp | A Nolan Edutech Pvt
          Ltd Venture
        </p>
      </div>
    </div>
  );
};

export default Footer;
