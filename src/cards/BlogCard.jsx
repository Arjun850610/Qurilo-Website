import React, { useEffect } from "react";
import { FaQuoteRight } from "react-icons/fa";
import { GoArrowRight } from "react-icons/go";

const BlogCard = ({ card }) => {

  const truncateText = (element) => {
    if (element) {
      const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
      const maxHeight = lineHeight * 2; // For 2 lines
      element.style.maxHeight = `${maxHeight}px`;
      element.style.overflow = "hidden";
      element.style.textOverflow = "ellipsis";
    }
  };

  useEffect(() => {
    const paragraphs = document.querySelectorAll(".truncate-paragraph");
    paragraphs.forEach(paragraph => truncateText(paragraph));
  }, []);

  return (
    <div className="shadow-md border-b-[2px] border-primary-500 group cursor-pointer h-full">
      <div className="overflow-hidden">
        <img src={card.image} alt={card.title} className="w-full h-[15rem] object-cover aspect-auto group-hover:scale-105 transition-all ease-in-out duration-500" />
      </div>
      <div className="px-2 py-1 md:px-5 md:py-2 mt-2 flex flex-col items-start gap-2 w-full h-full">
        <div className="flex items-start justify-between w-full">
          <h3 className="text-[18px] font-semibold tracking-wide group-hover:text-blue-600">{card.title}</h3>
          {/* <FaQuoteRight className="text-lg text-primary-500" /> */}
        </div>
        <div className="flex gap-2 flex-col">
          <h4 className="capitalize  text-sm text-zinc-400 text">{card.date}</h4>
          <p className="text-sm font-light truncate-paragraph">{card.description}</p>
        </div>
        <div className="group w-fit my-1">
          <button className="text-sm font-semibold flex items-center gap-2 group-hover: text-primary-500">
            Read More <GoArrowRight className="group-hover:-rotate-45 transition-all ease-in-out duration-500 text-base font-semibold" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
