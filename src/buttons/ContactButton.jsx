import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const ContactButton = ({ text }) => {
  return (
    <button
      className="relative flex items-center group overflow-hidden bg-white border-[1px] border-gray-200 group-hover:border-white rounded-full cursor-pointer h-14 px-8 pr-16 justify-around"
      style={{ width: "max-content" }}
    >
      <span className="relative z-10 text-base md:text-lg text-black group-hover:text-white mr-2">
        {text}
      </span>
      <div className="absolute right-1 z-10 flex items-center justify-center w-[50px] h-[50px] bg-primary-500 rounded-full">
        <FaArrowRight  className="text-white text-2xl" />
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-primary-500 transition-transform duration-300 transform scale-x-0 origin-right group-hover:scale-x-100"></div>
    </button>
  );
};

export default ContactButton;
