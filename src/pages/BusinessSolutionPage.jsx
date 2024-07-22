import React, { useState } from "react";
import { data } from "../data/BusinessSolutionPageData";
import Title from "./Title";
import BusinessPageCard from "./BusinessPageCard";
import ToggleButton from "../buttons/ToggleButton";

const BusinessSolutionPage = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleCards = showAll
    ? data.cardsData
    : data.cardsData.slice(0, 6);

  const toggleVisibility = () => {
    setShowAll(!showAll);
  };

  return (
    <main>
      <section
        className="relative bg-cover bg-center py-24 md:py-10 lg:py-14 xl:py-44 w-full px-6 lg:px-20"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.4) 100%),url(${data.image})`,
        }}
      >
        <div className="container right-0 md:mt-12 text-left text-white relative z-10 ">
          <div className="flex items-center relative">
            <div className="md:text-left text-center">
              <div className=" flex flex-col items-center md:items-start">
                <h1 className="md:text-6xl font-sans text-3xl font-bold mb-6">
                  {data.headline}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="w-full py-10 px-6 flex flex-col items-center gap-10 lg:px-20 lg:py-16 lg:gap-16">
          <div className="w-full">
            <Title heading={data.subHeading} subheading={data.des} />
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
            {visibleCards.map((card, i) => (
              <BusinessPageCard card={card} key={i} />
            ))}
          </div>

          {showAll ? (
          <ToggleButton text={"view Less Solutions"} toggleVisibility={toggleVisibility} />
        ) : (
            <ToggleButton text={"view All Solutions"} toggleVisibility={toggleVisibility} />
        )}


        </div>
      </section>
    </main>
  );
};

export default BusinessSolutionPage;
