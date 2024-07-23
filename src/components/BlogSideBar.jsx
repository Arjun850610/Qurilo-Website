import React from "react";
import { sideBarData } from "../data/SideBarData";
import { BsSuitDiamond } from "react-icons/bs";

const BlogSideBar = () => {
  return (
    <section>
      <div className="hidden lg:block lg:w-[30%]">
        <div className="flex flex-col gap-5">
          <h4 className="text-xl  sm:text-2xl tracking-wide font-medium before:'' before:w-10 before:h-1 before:bg-primary-500 relative ">
            {sideBarData?.aboutUsSection?.aboutHeading}

            <span className="absolute -bottom-1 left-0 w-16 h-[3px] bg-primary-500"></span>
          </h4>
          <p className="text-lg">{sideBarData?.aboutUsSection?.aboutPera}</p>
        </div>

        <div className="flex flex-col gap-6 mt-12">
          <h4 className="text-xl  sm:text-2xl tracking-wide font-medium relative ">
            {sideBarData?.services?.servicesHeading}

            <span className="absolute -bottom-1 left-0 w-16 h-[3px] bg-primary-500"></span>
          </h4>
          <ul className=" flex flex-col gap-4 sm:text-lg">
            {sideBarData?.services?.servicesList?.map((item, i) => (
              <li
                key={i}
                className="border-b-2 border-zinc-200 pb-2 flex items-center gap-2 hover:gap-4 hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <BsSuitDiamond className="text-primary-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-10 mt-12">
          <h5 className="text-xl  sm:text-2xl tracking-wide font-medium relative">
            Most Recent Blogs
            <span className="absolute -bottom-1 left-0 w-16 h-[3px] bg-primary-500"></span>
          </h5>

          <ul className="flex flex-col items-start gap-4">
            {sideBarData?.recentBlogs?.map((item, j) => (
              <li className="flex items-start gap-4 hover:text-primary-500 cursor-pointer transition-all ease-in-out duration-200 ">
                <img
                  src={item.image}
                  alt={`image ${j + 1}`}
                  className="w-24 h-20 rounded-sm object-cover"
                />
                <h6 className="text-[16px] font-medium leading-6 ">
                  {item.title}
                </h6>
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex flex-col gap-20 mt-20">
          {sideBarData?.marketing?.map((item, i) => (
            <div className="">
              <img
                src={item.image}
                alt={item.name}
                className="w-[80%] h-[10rem] mx-auto object-cover rounded-sm"
              />
              <h5 className="text-primary-500 text-xl text-center mt-1">
                {item.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSideBar;
