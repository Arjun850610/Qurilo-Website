import React, { useEffect, useState, useRef } from "react";
import { data } from "../data/HighlightSectionData";

const CompletedProjectsSection = () => {
  const [inView, setInView] = useState(false);
  const [counts, setCounts] = useState(data.map(() => 0));
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const timers = data.map((item, index) => {
        return setTimeout(() => {
          setCounts(prevCounts => {
            const newCounts = [...prevCounts];
            if (newCounts[index] < item.count) {
              newCounts[index] += 1;
            }
            return newCounts;
          });
        }, 50 * index); // Adjust the delay as needed
      });

      return () => {
        timers.forEach(timer => clearTimeout(timer));
      };
    } else {
      // Reset counts to 0 when out of view
      setCounts(data.map(() => 0));
    }
  }, [inView]);

  return (
    <section ref={ref}>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:gap-20 px-6 lg:px-24 py-10">
        {data?.map((item, i) => (
          <div key={i} className="w-full bg-[#f0f6ff] text-black rounded-lg p-4 py-10 flex flex-col items-center">
            <div className="text-5xl lg:text-7xl text-primary-500 flex gap-1 w-fit">
              <h3>{counts[i]}</h3>
              {item.unit}
            </div>
            <p className="text-lg mt-5 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompletedProjectsSection;
