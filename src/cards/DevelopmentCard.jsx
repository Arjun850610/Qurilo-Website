import React from "react";
import "./developmentCard.css"; // Import your CSS file for styling
import { FaCheck } from "react-icons/fa6";
import ExploreMoreButton from "../buttons/ExploreMoreButton";

const DevelopmentCard = ({ card }) => {
  return (
    <div className="card-container">
      <div className="card">
        <div
          className="front flex items-end justify-start px-4 pb-6 cursor-pointer"
          style={{
            background: `linear-gradient(0deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.6) 10%, rgba(255,248,248,0) 100%), url(${card.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="content">
            <div className="flex items-center gap-4">
              <img src={card.icon} alt={card.title} className="w-[38px] h-[38px]" />
              <h3 className="text-2xl font-semibold capitalize">{card.title}</h3>
            </div>
          </div>
        </div>
        <div className="back bg-white text-black px-8 py-6">
          <div className="content flex flex-col items-start justify-between w-full h-full">
            <div className="flex flex-col  gap-3">
              {/* <img src={card.blueIcon} alt={card.title} className="w-16 h-16" /> */}
              <h3 className="text-3xl xl:text-2xl font-semibold capitalize">{card.title}</h3>
              <p className="w-32 h-[2px] bg-primary-500"></p>
            </div>
            <ul className="flex flex-col gap-2">
              {card.description?.map((des, i) => (
                <li key={i} className="flex items-center gap-4 font-semibold text-base" >
                  <FaCheck />
                  {des}
                </li>
              ))}
            </ul>

              <div className="w-full">
                <ExploreMoreButton />
              </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default DevelopmentCard;
