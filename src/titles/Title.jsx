import React from "react";

const Title = ({ heading, subheading }) => {
  return (
    <div className=" mx-auto">
      <h2 className='text-black text-2xl lg:text-4xl capitalize font-[600] text-center'>{heading}</h2>
      <p className="text-center text-[18px] font-[400] mt-2">{subheading}</p>
    </div>
  );
};

export default Title;
