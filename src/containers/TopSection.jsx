import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const TopSection = ({ heading, des, bgImage, topbannerimage }) => {

    const [scrollY, setScrollY] = useState(window.scrollY);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <section>
      <div className="w-full h-[33rem] md:h-[28rem] lg:h-[35rem] lg:px-20 px-6 md:px-8 text-white bg-cover bg-center bg-no-repeat relative overflow-hidden flex items-center justify-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
      >
        <div className="w-60 h-60 bg-white/10 absolute -top-[5rem] -right-[10rem] rounded-full "></div>
        <div className="w-full flex items-center justify-between relative">
          <div className="flex flex-col gap-4 xl:gap-6 md:w-[40%] lg:w-[45%] xl:w-[45%]">
            <h1 className="text-3xl md:text-3xl xl:text-5xl font-semibold">{heading}</h1>
            <p className="text-sm lg:text-base xl:text-lg">{des}</p>
          </div>

          <div className="hidden md:block md:w-[65%] lg:w-[70%] xl:w-[55%] 2xl:w-[52%] absolute -right-5 -bottom-[9rem] lg:-bottom-[12rem] lg:-right-[5.5rem] xl:-bottom-[12rem] xl:-right-[2rem] 2xl:-bottom-[11.5rem] 2xl:-right-[1rem] z-10">
            <img src={topbannerimage} alt={heading} className="w-full h-full object-cover" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default TopSection;
