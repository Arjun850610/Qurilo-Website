import React from "react";
import { data } from "../data/WhyChooseUsData";
import ContactButton from "../buttons/ContactButton";
import WhyChooseUsCard from "./WhyChooseUsCard";

const WhyChooseUsSection = () => {
  // Split the data.cardsData into two arrays
  const halfIndex = Math.ceil(data.cardsData.length / 2);
  const firstHalf = data.cardsData.slice(0, halfIndex);
  const secondHalf = data.cardsData.slice(halfIndex);

  return (
    <section>
      <div className="w-full lg:flex lg:flex-row-reverse">
        <div className="lg:w-[35%] xl:w-[35%] lg:h-screen ">
          <img
            src={data.image}
            alt={data.heading}
            className="w-full h-full aspect-auto object-cover"
          />
        </div>

        <div className="px-6 py-10 flex flex-col items-start gap-4 lg:gap-4 lg:w-[65%]  xl:w-[65%] lg:px-20 relative">
          <h2 className="text-3xl lg:text-4xl font-semibold">{data.heading}</h2>
          <p className="text-sm">{data.des}</p>

          <ContactButton text={data.btnText} />

          <div className="flex flex-col md:flex-row gap-7 mt-5 xl:mt-5 xl:gap-10">
            {/* Render the first half of the cards */}
            <div className="flex flex-col items-center gap-7 xl:gap-10">
              {firstHalf.map((card, i) => (
                <WhyChooseUsCard key={i} card={card} />
              ))}
            </div>
            {/* Divider line */}
            <div
              className="
                hidden lg:block w-[1.5px] min-h-[25rem] bg-primary-500 rounded-full
              "
            />
            {/* Render the second half of the cards */}
            <div className="flex flex-col items-center gap-7 xl:gap-10">
              {secondHalf.map((card, i) => (
                <WhyChooseUsCard key={i + halfIndex} card={card} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
