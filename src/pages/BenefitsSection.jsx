
import BenefitsCard from "./BenefitsCard";
import { benefitsData } from "./benefitsSection";
import Title from "./Title";
// import backgroundImage from "../assets/homePage/images/benefitsBgImage.jpg";
import backgroundImage from "./benefitsBgImage.jpg";

const Benefits = () => {
  return (
    <>
      <section
        className="py-10 lg:pb-20 flex flex-col items-center gap-5"
        style={{
          background: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }}
      >
        <div className="px-6">
          <h3 className="text-center font-medium tracking-wide mb-2">BENEFITS</h3>
          <Title type="benefits" heading="5 Qualities of Our Digital Solutions" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 lg:w-[80%] gap-y-8 gap-x-10 w-[90%]">
          {benefitsData.map((benefit, index) => (
            <BenefitsCard key={index} idx={index} {...benefit} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Benefits;
