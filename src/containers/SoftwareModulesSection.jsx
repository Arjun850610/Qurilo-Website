import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import ModulesCard from "../cards/ModulesCard";

const chunkArray = (array, size) => {
  const chunkedArr = [];
  for (let i = 0; i < array.length; i += size) {
    chunkedArr.push(array.slice(i, i + size));
  }
  return chunkedArr;
};

const SoftwareModulesSection = ({ moduleSection }) => {
  const chunkedCardsData = chunkArray(moduleSection.cardsData, 6);

  return (
    <section>
      <div className="px-6 py-10 lg:px-20 lg:py-20 bg-black text-white">
        <div className="flex flex-col gap-5 lg:gap-6">
          <h2 className=" text-2xl font-sans lg:text-4xl capitalize font-[500] text-center">
            {moduleSection.heading}
          </h2>
          <p className="text-center font-sans text-[18px] font-[400] mt-2">
            {moduleSection.subHeading}
          </p>
        </div>

        <div className="">
          <Swiper
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            grabCursor={true}
            spaceBetween={60}
          >
            {chunkedCardsData.map((chunk, i) => (
              <SwiperSlide key={i}>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-20 pb-10">
                  {chunk.map((module, j) => (
                    <ModulesCard module={module} key={j} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default SoftwareModulesSection;
