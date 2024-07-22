import React from "react";

const BusinessPageCard = ({ card }) => {
  return (
    <div>
      <div class=" h-full rounded-[4px] bg-[#f1f6ff] hover:bg-second transition-all ease-in-out duration-100  shadow-sm border-b-4 border-primary-500">
        <div className="sm:h-[15rem]">
          <img
            src={card.image}
            alt={card.shortForm}
            className="w-full h-full object-cover rounded-t-[4px]"
          />
        </div>
        <div className="p-4 flex flex-col gap-3">
          <h3 class="text-xl text-black font-sans font-[500]">
            {card.shortForm}
          </h3>
          <h4 className="text-lg text-black font-sans font-[400]">{card.title}</h4>

          <p className="border-[1px] border-black/60"></p>

          <ul className="list-disc px-4 py-2">
            {card.list?.map((li, i) => (
              <li key={i} className="text-sm font-sans">{li}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default BusinessPageCard;
