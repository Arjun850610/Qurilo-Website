import React from "react";
import { data } from "../data/BlogReadingPageData";

import BlogSideBar from "../components/BlogSideBar";

const BlogReadingPage = () => {
  return (
    <main>
      <div className="box-border">
        <div className="px-6 py-10 lg:px-10 xl:px-20 w-full lg:flex lg:gap-10 lg:justify-between lg:items-start ">
          <div className="flex flex-col items-start gap-8 lg:w-[70%]">

            <div className="">
              <img src={data.image} alt="" />
            </div>

            <div className="flex flex-col gap-2 ">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-wide">{data.title}</h1>
              <p className="text-[13px] sm:text-[16px]">{data.dateAndBranding}</p>
            </div>
            <div className="flex flex-col gap-8">
              {data?.list?.map((item, i) => (
                <div className="flex flex-col gap-2" key={i}>
                  {item.heading && (
                    <h3  className="text-xl  sm:text-2xl tracking-wide font-medium">{item.heading}</h3>
                  ) }
                  <p className="sm:text-lg">{item.pera}</p>
                </div>
              ))}
            </div>

              {data.quote && (
                <h4 className="w-full px-6 lg:px-10 lg:py-8 py-4 bg-primary-500/10 text-xl sm:text-2xl rounded-lg">
                  <i>
                  {data.quote}
                  </i>
                </h4>
              )}

              <div className="flex flex-col items-start gap-4">
                <h2 className="text-xl  sm:text-2xl tracking-wide font-medium">{data.section?.sectionHeading}</h2>
                <ul className="list-disc flex flex-col gap-2 pl-5 sm:text-lg">
                  {data.section?.sectionList?.map((item, i) => (
                    <li key={i}>
                      <span className="font-medium">{item?.listTag}: </span>
                      {item?.listpera}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-xl sm:text-2xl tracking-wide font-medium">{data?.conclusion?.conclusionHeading}</h4>
                <p className="sm:text-lg">{data?.conclusion?.conclusionPera}</p>
              </div>

          </div>

          {/* side bar */}
         <div className="hidden lg:block lg:w-[30%]">
          <BlogSideBar />
         </div>

        </div>
      </div>
    </main>
  );
};

export default BlogReadingPage;
