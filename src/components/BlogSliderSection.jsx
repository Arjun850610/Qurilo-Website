import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import BlogCard from "../cards/BlogCard";
import "./BlogSliderSection.css"

const BlogSliderSection = ({ remainingArray }) => {
  return (
    <Swiper
      className="w-full px-6 lg:px-20 xl:px-28 py -20 relative"
      pagination={{ clickable: true }}
      navigation
      loop
      modules={[Pagination, Navigation]}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 50,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        // when window width is >= 1024px
        1024: {
          slidesPerView: 2,
          spaceBetween: 50,
        },
        1280: {
          slidesPerView: 3,
          spaceBetween: 80,
        },
      }}
    >
      {remainingArray?.map((card, i) => (
        <SwiperSlide key={i}>
          <BlogCard card={card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BlogSliderSection;
