import React from "react";
import ContactButton from "../buttons/ContactButton";
import image1 from "../assets/image/crm/0000001.png"
import image2 from "../assets/image/crm/0000002.png"
import image3 from "../assets/image/crm/0000003.png"

const ContactSection2 = ({ contactData }) => {
  return (
    <section>
      <div className="w-full py-20 px-6 bg-gradient-to-r from-black to-gray-800 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex items-center gap-5 flex-col lg:items-start lg:px-20">
          <h1 className="text-4xl text-center lg:text-start">
            {contactData.heading}
          </h1>
          <p className="text-lg text-gray-300 text-center lg:text-start mb-5">
            {contactData.des}
          </p>
          <ContactButton text={contactData.button} />
        </div>
        {/* <div className="flex  items-center justify-center">
            <img src={contactImage} alt="contactImage" className="h-[10rem] md:h-[15rem]"/>
        </div> */}

        <div className="flex items-center flex-wrap md:flex-nowrap gap-x-4 justify-center ">
          <div className="relative">
            {" "}
            <img className="animate-spin-slow " src={image1} />{" "}
            <div className="absolute left-[1.5rem] top-[3rem]">
              <p className="text-center">2500+</p>{" "}
              <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                satisfied customers
              </p>
            </div>{" "}
          </div>
          <div className="relative">
            {" "}
            <img className="animate-spin-slow " src={image2} />{" "}
            <div className="absolute left-[1.5rem] top-[3rem]">
              <p className="text-center">2500+</p>{" "}
              <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                satisfied customers
              </p>
            </div>{" "}
          </div>
          <div className="relative">
            {" "}
            <img className="animate-spin-slow " src={image3} />{" "}
            <div className="absolute left-[1.5rem] top-[3rem]">
              <p className="text-center">2500+</p>{" "}
              <p className="text-center w-[99%] font-medium text-gray-200 text-sm">
                satisfied customers
              </p>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection2;
