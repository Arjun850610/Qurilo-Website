import React from "react";

const WhyChooseUsCard = ({ card }) => {
  return (
    <div className="w-full lg:w-[26rem] xl:w-[27rem] 2xl:w-[27rem] h-full xl:h-full flex gap-4 border-[2px] border-primary-500 border-b-[8px] px-4 py-6 rounded-t-lg bg-white">
      <div className="">
        <img src={card.icon} alt={card.cardTitle} className="w-[7rem]" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{card.cardTitle}</h3>
        <p className="text-sm">{card.cardDes}</p>
      </div>
    </div>
  );
};

export default WhyChooseUsCard;
