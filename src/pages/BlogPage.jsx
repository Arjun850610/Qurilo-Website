import React from "react";
import TopSection from "../containers/TopSection";
import { data } from "../data/BlogPageData";
import BlogCard from "../cards/BlogCard";
import BlogSliderSection from "../components/BlogSliderSection";

const BlogPage = () => {
  const chunkedCardData = data.cardsData.slice(0, 6);
  const remainingArray = data.cardsData.slice(6);

  return (
    <div className="box-border">
      {/* <TopSection heading={data.heading} des={data.des} bgImage={data.bgImage} topbannerimage={data.topbannerImage} /> */}
      <div className=" py-10 flex flex-col items-center gap-10 xl:gap-16">
        <div className="flex items-center gap-4 md:gap-20 xl:gap-20">
          <span className="w-20 sm:w-36 md:w-44 lg:w-52 xl:w-64 h-[1px] bg-black inline-block"></span>
          <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Our Blogs
          </h2>
          <span className="w-20 sm:w-36 md:w-44 lg:w-52 xl:w-64 h-[1px] bg-black inline-block"></span>
        </div>

        <div className="px-6 grid grid-cols-1 gap-10 md:grid-cols-2 lg:px-20 xl:grid-cols-3 xl:gap-20">
          {chunkedCardData.map((card, i) => (
            <BlogCard card={card} key={i} />
          ))}
        </div>

        <div className="w-full flex flex-col items-center gap-10 relative xl:gap-20">


        <h2 className="text-xl font-semibold md:text-2xl lg:text-3xl">
            Our Latest Blogs
          </h2>


          <div className="grid grid-cols-1 gap-2 px-10">
            <BlogSliderSection remainingArray={remainingArray} />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
