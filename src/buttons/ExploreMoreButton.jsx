import React from "react";
import { MdArrowForwardIos } from "react-icons/md";

const ExploreMoreButton = () => {
  return (
    <div className="group">
      <button className="w-full py-2 border-[2px] border-primary-500 rounded-md hover:bg-primary-500 hover:text-white transition-all ease-linear duration-200 text-primary-500 text-xl flex items-center justify-center gap-2 font-semibold ">
        <p>Explore More</p> <MdArrowForwardIos className=" group-hover:text-white" />
      </button>
    </div>
  );
};

export default ExploreMoreButton;
