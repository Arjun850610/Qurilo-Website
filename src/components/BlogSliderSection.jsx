import React from "react";
import BlogCard from "../cards/BlogCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const BlogSliderSection = ({ remainingArray }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1900,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="slider-container px-2">
      <Slider {...settings}>
        {remainingArray?.map((card, i) => (
          <div className="px-6" key={i}>
            <BlogCard card={card} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

// Custom next arrow component
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="border-2 border-primary-500 p-2 rounded-full text-2xl hover:text-white hover:bg-primary-500 transition-all ease-in-out duration-300 absolute -top-[65px] lg:-top-[95px] right-8"
      onClick={onClick}
    >
      <MdArrowForwardIos />
    </button>
  );
};

// Custom previous arrow component
const SamplePrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <button
      className="border-2 border-primary-500 py-2 px-1 rounded-full text-2xl hover:text-white hover:bg-primary-500 transition-all ease-in-out duration-300 absolute -top-[65px] lg:-top-[95px] right-24"
      onClick={onClick}
    >
      <MdArrowBackIos className="ml-2" />
    </button>
  );
};

export default BlogSliderSection;
