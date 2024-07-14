import React from "react";
import Heading from "../buttons/Heading";
import TechnologyCard from "../cards/TechnologyCard";

const Technologies = ({ technologies }) => {
  return (
    <section>
      <div className="flex flex-col items-center px-6 lg:px-20 py-16 gap-10 ">
        <Heading heading="CRM Technologies We Use" />
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-14">
          {technologies.map((tech, i) => (
            <TechnologyCard key={i} tech={tech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technologies;
