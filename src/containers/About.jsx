import React from 'react';
const  AwardComponent = () => {
  return (
    <section className="py-8 md:py-12 bg-black" >
      <div className=" mx-auto flex flex-col-reverse gap-8 md:flex-row items-center ">
        <LeftImageSection />
        <RightContentSection />
      </div>
    </section>
  );
};
export default AwardComponent;


// import Award from '../assets/images/Award.png'; // Adjust the path to your image
const LeftImageSection = () => {
  return (
    <div className="w-full lg:w-1/2 px-6 md:px-0">
      <img src="https://www.valuecoders.com/wp-content/themes/valuecoders/v4.0/images/award-image.svg" alt="Award" className="w-full h-auto md:pl-24" />
    </div>
  );
};


const RightContentSection = () => {
  return (
    <div className="w-full lg:w-1/2 px-6 py-4 md:py-2">
      <div className="flex items-center gap-0 mb-4 md:mb-6">
        <h2 className="w-fit text-3xl md:text-2xl lg:text-4xl font-bold text-white ml-4 md:ml-2">Awards & Recognitions</h2>
        <div className="ml-2 md:ml-4 bg-yellow-500 text-black p-2 flex items-center justify-center h-8 w-8 rounded" style={{ background: "#558BDC" }}>
          <span className="text-xl font-bold">➔</span>
        </div>
      </div>
      <p className="text-white ml-4 md:ml-2 pr-4 md:pr-20">
        In the last 18 years, we have been acknowledged by prestigious organizations and awarded for our work.
      </p>
    </div>
  );
};