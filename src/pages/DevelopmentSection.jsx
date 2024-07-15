import React, { useState } from "react";
import { developmentSection } from "../data/DevelopmentSectionData";
// import ToggleButton from "../buttons/ToggleButton";
import DevelopmentCard from "../cards/DevelopmentCard";
import ToggleButton from "../buttons/ToggleButton";

const DevelopmentSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? developmentSection.cards : developmentSection.cards.slice(0, 6);

  const toggleVisibility = () => {
    setShowAll(!showAll);
  };

  return (
    <section>
      <div className="w-full flex flex-col items-center gap-10 py-10 pb-20 lg:gap-20 lg:px-20 bg-black text-white">
        <div className="w-full flex flex-col gap-3 justify-between px-6">
          <h6 className="font-medium">{developmentSection.title}</h6>
          <h2 className=" text-2xl md:text-3xl lg:text-4xl capitalize font-[600]">
            {developmentSection.tagline}
          </h2>
        </div>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-20 px-6 lg:gap-10 lg:gap-y-16 xl:gap-16   xl:gap-y-20">
          {visibleCards.map((card, i) => (
            <DevelopmentCard card={card} key={i} index={i} />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DevelopmentSection;
