import React from "react";
import Services from "../containers/Services";
import HeroSection from "../containers/HeroSection";
import { heroSection } from "../data/crm";
import { contactData1 } from "../data/crm";
import { contactData2 } from "../data/crm";
import { technologies } from "../data/crm";
import { SoftwareModulesData } from "../data/crm";
import { WhyChooseUsData } from "../data/crm";
import ContactSection from "../containers/ContactSection";
import Technologies from "../containers/Technologies";
import FaqSection from "../containers/FAQSection";
import Testimaonial from "../containers/TestimonialSection";
import SoftwareModulesSection from "../containers/SoftwareModulesSection";
import ContactSection2 from "../containers/ContactSection2";
import WhyChooseUs from "../containers/WhyChooseUs";
import Blogs from "../containers/BlogSection";

const CRM = () => {
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

export default CRM;
