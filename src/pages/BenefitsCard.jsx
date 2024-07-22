import React from "react";

const BenefitsCard = ({ icon, title, content }) => {
  return (
    <div className=" p-6 border-[3px] border-primary-500 bg-white rounded-lg shadow-md transform transition-transform duration-500 hover:-translate-y-3">
      <div className="flex flex-col items-center gap-3 px-2">
        <div className="bg-primary-500 w-fit h-fit p-2 rounded-full flex items-center justify-center -mt-10">
          <img className="w-8 h-8 object-cover" src={icon} alt={title} />
        </div>
        <h2 className="text-xl font-semibold mb-1 text-center mt-4">{title}</h2>
        <p className="text-[14px] font-normal text-center text-gray-900">{content}</p>
      </div>
    </div>
  );
};

export default BenefitsCard;
