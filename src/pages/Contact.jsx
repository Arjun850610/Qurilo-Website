import React, { useState } from "react";
import { RiArrowRightSFill } from "react-icons/ri";
import "./contact.css";

const Contact = () => {
  const [labelState, setLabelState] = useState({
    name: false,
    email: false,
    message: false
  });
  const [listItem, setlistItem] = useState(null)

  const handleFocus = (field) => {
    setLabelState({ ...labelState, [field]: true });
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setLabelState({ ...labelState, [field]: false });
    }
  };

  const listItems = ["option1","option2","option3","option4","option5","option6","option7","option8","option",]

  return (
    <section>
      <div className="w-full px-6 sm:px-8 py-10 lg:py-20 xl:px-36 bg-black text-white flex flex-col gap-20 sm:gap-10 md:gap-[10rem] sm:flex-row sm:items-center justify-center">
        <div className="flex flex-col items-start gap-6 md:gap-10 w-full md:w-[40%] lg:w-[30%] xl:w-[40%]">
          <div className="relative w-full ">
            <label
              htmlFor="name"
              className={`absolute bottom-2 transition-all ease-in-out duration-300 ${
                labelState.name ? "-translate-y-7 opacity-50" : "translate-y-0"
              }`}
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className="bg-transparent w-full border-b-2 border-white py-2 focus:outline-none"
              onFocus={() => handleFocus("name")}
              onBlur={(e) => handleBlur("name", e.target.value)}
            />
          </div>
          <div className="relative w-full ">
            <label
              htmlFor="email"
              className={`absolute bottom-2 transition-all ease-in-out duration-300 ${
                labelState.email ? "-translate-y-7 opacity-50 " : "translate-y-0"
              }`}
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="bg-transparent w-full border-b-2 border-white py-2 focus:outline-none"
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e.target.value)}
            />
          </div>
          <div className="relative w-full h-auto">
            <label
              htmlFor="message"
              className={`absolute bottom-2 transition-all ease-in-out duration-300 ${
                labelState.message ? "-translate-y-52 opacity-50" : "-translate-y-0"
              }`}
            >
              Share Your Thoughts
            </label>
            <input type="text" name="message" id="message"  className="bg-transparent w-full border-b-2 border-white py-2 focus:outline-none "
            onFocus={() => handleFocus("message")}
            onBlur={(e) => handleBlur("message", e.target.value)}
            />
            {labelState.message ? (
            <ul className="flex flex-col max-h-44 overflow-y-auto">
              {listItems.map((item, i) => (
                <li key={i} className="px-2 py-2 bg-gray-800 capitalize border-2 border-gray-200">
                  {item}
                </li>
              ))}
            </ul>
            ) : ""}
          </div>
          <button
            type="button"
            className="relative w-full bg-white text-black font-medium py-4 rounded-sm before-animation"
          >
            <span className="">Share Your Feedback</span>
          </button>
        </div>
        <div className="flex flex-col items-center relative gap-14 bg-gray-3 w-fit self-center">
          <h1
            className="text-5xl xl:text-6xl flex flex-col items-center z-10 shadow-sm"
            style={{
              textShadow: `1px 1px 2px rgba(255, 165, 0, 0.7), 
                           2px 2px 4px rgba(255, 165, 0, 0.5), 
                           3px 3px 6px rgba(0, 0, 255, 0.7),  
                           4px 4px 8px rgba(0, 0, 255, 0.5)`,
            }}
          >
            Contact <br />
            <span className="flex items-center gap-1">
              <span className="w-20 h-[2px] bg-white inline-block"></span>Us
            </span>
          </h1>
          <p className="text-sm opacity-90 z-10 md:w-56 w-64 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta
            quo perferendis necessitatibus 
          </p>
          <div
            className="w-[15rem] h-[15rem] border-2 absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 z-0 opacity-30"
            style={{
              borderRadius: "70% 20% 40% 10% / 30% 20% 40% 80%",
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
