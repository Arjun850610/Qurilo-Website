import React from "react";
import mobileImage from "../assets/image/crm/contentManagement.jpg"
import bigScreenImage from "../assets/image/crm/contentManagement.jpg"
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import ContactButton from "../buttons/ContactButton";
import { fetchData } from "../api/banner";

const HeroSection = ({ data }) => {

  const [banner, setbanner] = useState({})
  // console.log(banner)
  // const getData = async() =>{
  //   const response = await fetchData()
  //   console.log(response)  
  //   setbanner(response)
  // }

  // useEffect(()=>{
  //   getData()
  // },[])
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [isScrolledPast, setIsScrolledPast] = useState(false);
  const handleScroll = () => {
    setIsScrolledPast(window.scrollY > window.innerHeight / 2);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section
        className="relative bg-cover bg-center py-32 md:py-10 lg:py-14 xl:py-44 w-full px-6 lg:px-20 mg:h-screen"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 100%),url(${
            isMobile
              ? mobileImage
              : bigScreenImage
          })`,
        }}
      >
        <div className="container right-0 md:mt-12 text-left text-white relative z-10 ">
          <div className="flex items-center relative">
            <div className="md:text-left text-center">
              <div className=" flex flex-col items-center md:items-start">
                <h1 className="md:text-6xl font-sans text-3xl font-bold mb-6">
                {data.headline}
                </h1>
                <p className="text-xl font-sans mb-12 md:w-1/2 w-full ">
                {data.description}
                </p>
                <ContactButton text={data.button} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HeroSection;
