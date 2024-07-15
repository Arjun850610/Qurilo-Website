import React from "react";
import Services from "../containers/Services";
import HeroSection from "../containers/HeroSection";
import { heroSection } from "../data/erp";
import { contactData1 } from "../data/erp";
import { contactData2 } from "../data/erp";
import { technologies } from "../data/erp";
import { SoftwareModulesData } from "../data/erp";
import { WhyChooseUsData } from "../data/erp";
import ContactSection from "../containers/ContactSection";
import Technologies from "../containers/Technologies";
import FaqSection from "../containers/FAQSection";
import Testimaonial from "../containers/TestimonialSection";
import SoftwareModulesSection from "../containers/SoftwareModulesSection";
import ContactSection2 from "../containers/ContactSection2";
import WhyChooseUs from "../containers/WhyChooseUs";
import Blogs from "../containers/BlogSection";

const ERP = () => {
  return (
    <main>
      <div className=" w-full">
        <HeroSection data={heroSection}/>
        <Services />
        <SoftwareModulesSection moduleSection={SoftwareModulesData} />
        <Technologies technologies={technologies} />
        <ContactSection contactData={contactData1} />
        <WhyChooseUs data={WhyChooseUsData} />
        <ContactSection2 contactData={contactData2} />
        <FaqSection />
        <Testimaonial />
        <Blogs />
      </div>
    </main>
  );
};

export default ERP;
