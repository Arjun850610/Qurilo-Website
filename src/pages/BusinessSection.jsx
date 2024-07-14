import React, { useState } from "react";
import ContactButton from "../buttons/ContactButton";
import BusinessCards from "../cards/BusinessCards";
import data from "../data/businessSolutionsData";

const BusinessSection = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll ? data.cards : data.cards.slice(0, 6);

  return (
    <section>
      <div className="w-full flex flex-col gap-6 py-10 lg:gap- ">
        <div className="flex flex-col gap-3 justify-between px-6 lg:px-20">
          <h6 className="font-medium">{data.title}</h6>
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl capitalize font-[600]">
            {data.tagline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {visibleCards.map((card, i) => (
            <BusinessCards card={card} key={i} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-6" onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <ContactButton text={"View Less Solutions"} />
          ) : (
            <ContactButton text={"View All Solutions"} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
