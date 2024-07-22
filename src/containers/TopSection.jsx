import React, { useEffect, useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { GoMail } from "react-icons/go";

const TopSection = ({ heading, des, bgImage, name, image, links, type, topbannerimage }) => {

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

    const backgroundStyle =
    type === "reading"
      ? {
          background: `linear-gradient(90deg, rgb(12,23,72) 0%, #558BDC 100%)`,
        }
      : {
          backgroundImage: `url(${bgImage})`, 
        };

  return (
    <section>
      <div
        className="w-full h-[33rem] md:h-[32rem] lg:px-20 px-6 md:px-8 text-white flex flex-col items-start justify-center gap-12 md:gap-16 lg:gap-20"
        style={backgroundStyle}
      >
        <h1 className="text-2xl md:font-semibold md:text-3xl md:w-[80%] font-[500] pt-14 tracking-wider">{heading}</h1>
        {type === "reading" && (
          <div className="md:flex md:items-center md:justify-between md:w-full gap-4">
            <div className="flex items-start gap-3">
              <img src={image} alt={name} className="w-[25px] h-[25px] md:w-[30px] md:h-[30px]" />
              <div className="text-xl -mt-1">
                <p className="font-[300] text-[18px] md:text-[20px]">Written By</p>
                <p className="text-lg md:text-xl">{name}</p>
              </div>
            </div>
            <div
              className={`flex items-center gap-2 pt-8 transition-all ease-in-out duration-500 ${
                scrollY > 300 ? "fixed flex-col gap-4 left-5 z-40" : ""
              }`}
            >
                <div className="bg-black text-white p-2 text-2xl md:text-2xl md:p-2 rounded-full">
                    <FaFacebook />
                </div>
                <div className="bg-black text-white p-2 text-2xl md:text-2xl md:p-2 rounded-full">
                    <FaXTwitter />
                </div>
                <div className="bg-black text-white p-2 text-2xl md:text-2xl md:p-2 rounded-full">
                    <FaInstagram />
                </div>
                <div className="bg-black text-white p-2 text-2xl md:text-2xl md:p-2 rounded-full">
                    <GoMail />
                </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TopSection;
