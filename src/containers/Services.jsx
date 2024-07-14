import React from "react";
import Heading from "../buttons/Heading";
import { servicesCardsData } from "../data/crm";
import CrmServicesCards from "../cards/CrmServicesCards";

const Services = () => {
  const heading = ["Our Customer Relationship Management Services"];
  const para =
    "We have the experience and expertise regarding CRM system services with a proven track record, so you can rest assured that your project is in good hands.";

  return (
    <section>
      <div className="px-6 lg:px-20 py-16 grid grid-cols-1 gap-20 bg-white text-black">
        {/* headings */}
        <div className="flex flex-col gap-6">
          <div className="text-black text-2xl lg:text-4xl capitalize font-[600] text-center">
            Our Customer Relationship Management Services
          </div>
          <p className="text-center text-[18px] font-[400] mt-2">
            We have the experience and expertise regarding CRM system services
            with a proven track record, so you can rest assured that your
            project is in good hands.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
          {servicesCardsData?.map((card, i) => (
            <CrmServicesCards
              key={i}
              image={card.image}
              name={card.heading}
              des={card.desciption}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
