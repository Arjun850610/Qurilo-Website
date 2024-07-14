import React, { useState } from "react";
import ContactButton from "../buttons/ContactButton";
import BusinessCards from "../cards/BusinessCards";
import image from "../assets/images2/cardImage.jpg";

const BusinessSection = () => {
  const [showAll, setShowAll] = useState(false);

  const data = {
    title: "Business Solutions",
    tagline: "Explore Our Business Solutions",
    cards: [
      {
        image: "https://img.freepik.com/free-vector/isometric-erp-illustration_52683-84174.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Enterprise Resource Planning (ERP)",
        cardDes: "ERP implementation involves deploying systems to integrate and streamline core business processes, which enhances efficiency."
      },
      {
        image: "https://img.freepik.com/free-vector/hand-drawn-flat-design-crm-illustration_23-2149379498.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Customer Relationship Management (CRM)",
        cardDes: "Integrating CRM systems with other business applications creates a unified view of customer data, which improves customer services."
      },
      {
        image: "https://img.freepik.com/free-photo/supply-chain-representation-still-life_23-2150172310.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Supply Chain Management (SCM)",
        cardDes: "SCM system implementation involves deploying systems to manage supply chain activities, enhancing visibility, efficiency, and coordination across the supply chain network."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Human Resource Management Systems (HRMS)",
        cardDes: "HRMS implementation deploys systems to manage HR functions such as payroll, recruitment, and employee records, streamlining."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Business Intelligence (BI) and Analytics",
        cardDes: "BI tool implementation involves deploying tools like Power BI, Tableau, and Looker for data visualization and analysis. "
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Financial Management Solutions",
        cardDes: "E-commerce platform development involves building and maintaining online stores to facilitate seamless online shopping experiences for customers."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Document Management Systems (DMS)",
        cardDes: "DMS implementation deploys systems to manage, store, and track electronic documents, improving document accessibility and security."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Collaboration and Communication Tools",
        cardDes: "Unified communication systems are implemented to provide unified messaging, video conferencing, and collaboration, enhancing communication and teamwork."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Customer Service Solutions",
        cardDes: "Helpdesk and support systems are deployed to manage customer support and service requests, improving response times and customer satisfaction."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Marketing Automation",
        cardDes: "Campaign management tools are implemented to manage and automate marketing campaigns, enhancing the efficiency and effectiveness of marketing efforts."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Project Management Solutions",
        cardDes: "Project management software like Asana, Trello, and Microsoft Project is implemented to manage projects, improving project planning, tracking, and execution."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Customer Service Solutions",
        cardDes: "Helpdesk and support systems are deployed to manage customer support and service requests, improving response times and customer satisfaction."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Customer Service Solutions",
        cardDes: "Helpdesk and support systems are deployed to manage customer support and service requests, improving response times and customer satisfaction."
      },
      {
        image: "https://img.freepik.com/free-vector/hiring-agency-candidates-job-interview_1262-18940.jpg?ga=GA1.1.251442278.1719904573&semt=sph",
        cardTitle: "Customer Service Solutions",
        cardDes: "Helpdesk and support systems are deployed to manage customer support and service requests, improving response times and customer satisfaction."
      },
    ]
  };

  const visibleCards = showAll ? data.cards : data.cards.slice(0, 6);

  return (
    <section>
      <div className="w-full flex flex-col gap-6 py-10 lg:gap- ">
        <div className="flex flex-col gap-3 justify-between px-6 lg:px-20">
          <h6 className="font-medium">{data.title}</h6>
          <h2 className="text-black text-2xl md:text-3xl lg:text-4xl capitalize font-[600]">
            {data.tagline}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-10">
          {visibleCards.map((card, i) => (
            <BusinessCards card={card} key={i} index={i} />
          ))}
        </div>

        <div className="flex justify-center mt-6" onClick={() => setShowAll(!showAll)}>
          {showAll ? (
            <ContactButton text={"View Less Solutions"} />
          ) : (
            <ContactButton text={"View All Solutions"} />
          )}
        </div>
      </div>
    </section>
  );
};

export default BusinessSection;
