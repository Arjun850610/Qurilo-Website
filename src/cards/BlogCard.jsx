import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const BlogCard = ({ card }) => {
  return (
    <div className="shadow-md border-b-[3px] border-primary-500 rounded-lg group cursor-pointer">
      <div className="overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-[15rem] object-cover aspect-auto group-hover:scale-105 transition-all ease-in-out duration-500" />
      </div>
      <div className="px-4 py-5 md:px-10 md:py-10 flex flex-col items-start gap-5 w-full h-full">
        <div className="flex items-center justify-between w-full">
          <h4 className="capitalize font-medium">{card.date}</h4>
          <FaQuoteRight className="text-lg text-primary-500" />
        </div>
        <div className="flex gap-4 flex-col">
          <h3 className="text-xl font-semibold group-hover:text-blue-600">{card.title}</h3>
          <p className="text-sm font-light">{card.description}</p>
        </div>
        <div className="group w-fit">
          <button className="text-xl font-semibold flex items-center gap-2 group-hover: text-primary-500">
            Read More <GoArrowRight className="group-hover:-rotate-45 transition-all ease-in-out duration-500 text-2xl font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
