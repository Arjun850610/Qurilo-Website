import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

const BusinessCards = ({ card, index }) => {
  return (
    <div className="group">
      <div
        className={`flex items-start justify-between gap-5 md:gap-8 px-6 group-hover:bg-gradient-to-r from-black to-gray-800 group-hover:text-white py-5 transition-all ease-in-out duration-300 ${
          index % 2 === 0 ? "lg:pl-20 lg:pr-2" : "lg:pl-2 lg:pr-20"
        }`}
      >
        <div className="hidden md:block w-full md:h-[8rem] lg:h-[8rem] md:w-[20%] lg:w-[30%] overflow-hidden">
          <img
            src={card.image}
            alt={card.cardTitle}
            className="w-full h-full object-cover rounded-sm group-hover:scale-110 transition-all ease-in-out duration-300"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-2 lg:gap-1 lg:justify-between lg:w-[70%] md:h-[8rem] md:w-[80%] lg:h-[8rem]">
          <div className="flex items-center justify-between text-lg">
            <h3 className="font-[600] text-xl md:text-xl lg:text-base xl:text-lg">
              {card.cardTitle}
            </h3>
            <FaArrowRightLong className="text-primary-500 text-2xl lg:text-xl xl:text-2xl group-hover:-rotate-45 transition-all ease-in-out duration-300" />
          </div>
          <div className="text-zinc-800 mb-2 md:text-base lg:text-xs xl:text-base group-hover:text-zinc-300">
            {card.cardDes}
          </div>
          <p className="w-full h-[1px] bg-zinc-400 group-hover:text-zinc-100"></p>
        </div>
      </div>
    </div>
  );
};

export default BusinessCards;
