import React from "react";
import ContactButton from "../buttons/ContactButton";
import contactImage from "../assets/image/crm/contact.png"

const ContactSection = ( {contactData} ) => {
  return (
    <section>
      <div className="w-full py-20 px-6 bg-gradient-to-r from-black to-gray-800 text-white grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-0">
        <div className="flex items-center gap-5 flex-col lg:items-start lg:px-20">
          <h1 className="text-4xl text-center lg:text-start">{contactData.heading}</h1>
          <p className="text-lg text-gray-300 text-center lg:text-start mb-5">
            {contactData.des}
          </p>
          <ContactButton text={contactData.button} />
        </div>
        <div className="flex  items-center justify-center">
            <img src={contactImage} alt="contactImage" className="h-[10rem] md:h-[15rem]"/>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
