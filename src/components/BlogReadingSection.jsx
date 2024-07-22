import React, { useEffect, useState } from "react";

const BlogReadingSection = ({ data, type }) => {
  const [windowSize, setwindowSize] = useState(window.innerWidth);
  const remainingPara = data.sectionDes?.slice(1);

  useEffect(() => {
    const handleResize = () => {
      setwindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section>
      <div className="">
        {type === "section2" ? (
          <div
            className={`flex items-center md:items-start md:py-16 md:px-8 justify-between gap-10 px-6 py-10 lg:mx-20 ${
              windowSize >= 768 ? "flex-row-reverse" : "flex-col"
            }`}
          >
            <div className="flex flex-col gap-3 md:gap-3 md:w-[50%] md:min-h-[22rem] md:justify-between">
              <h2 className="text-xl font-semibold md:text-lg lg:text-2xl">
                {data.des?.[0].heading}
              </h2>
              <p className="md:text-xs lg:text-[14px] lg:leading-5">
                {data.des?.[0].des}
              </p>

              {windowSize >= 768 && (
                <>
                  <h2 className="text-xl font-semibold md:text-lg lg:text-2xl">
                    {data.des?.[1].heading}
                  </h2>
                  <p className="md:text-xs lg:text-[14px] lg:leading-5 ">
                    {data.des?.[1].des}
                  </p>
                </>
              )}
            </div>
            <div className="w-full h-[20rem] md:w-[40%] md:h-[22rem]">
              <img
                src={data.image}
                alt="BlogImage"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div
              className={`flex flex-col gap-3 ${windowSize >= 768 && "hidden"}`}
            >
              <h2 className="text-xl font-semibold">{data.des?.[1].heading}</h2>
              <p>{data.des?.[1].des}</p>
            </div>
          </div>
        ) : (
          <div
            className={`flex items-center md:py-16 lg:px-20 lg:gap-16 md:px-8 md:justify-between  gap-10 px-6 py-10 ${
              windowSize >= 768 ? "flex-row" : "flex-col"
            }`}
          >
            <div className="flex flex-col gap-3 md:gap-5 md:min-h-[22rem] md:w-[50%]">
              <h2 className="text-xl font-semibold lg:text-2xl">
                {data?.sectionTitle}
              </h2>
              <p className="md:text-sm lg:text-base">{data.sectionDes?.[0]}</p>

              {windowSize >= 768 &&
                remainingPara?.map((para, i) => (
                  <p key={i} className="text-sm lg:text-base">
                    {para}
                  </p>
                ))}
            </div>
            <div className="w-full h-[20rem] md:w-[40%] md:h-[22rem]">
              <img
                src={data?.sectionImage}
                alt="BlogImage"
                className="w-full h-full rounded-lg object-cover"
              />
            </div>

            <div
              className={`flex flex-col gap-3 ${windowSize >= 768 && "hidden"}`}
            >
              {type === "section2"
                ? ""
                : remainingPara?.map((para, i) => <p key={i}>{para}</p>)}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogReadingSection;
