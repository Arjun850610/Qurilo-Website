import React from "react";

const TechnologyCard = ({ tech }) => {
  return (
    <div className=" h-full flex flex-col gap-5 py-10 border-b-[1px] border-zinc-400">
      <h1 className="text-xl font-[600] ">{tech.heading}</h1>
      <div className="w-full h-[4px] bg-primary-500 rounded-md"></div>
      <div className="flex gap-5 flex-wrap">
        {tech.tech?.map((techUsed, i) => (
          <p key={i} className="border-2 border-primary-500 hover:bg-primary-500 transition-all ease-in-out duration-200 hover:text-white  py-2 px-4 rounded-md cursor-pointer h-fit">
            {techUsed}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TechnologyCard;
