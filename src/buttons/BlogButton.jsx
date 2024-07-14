import { IoIosArrowRoundForward } from "react-icons/io";
import { useState } from "react";

const BlogButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="mt-4 mb-2 tracking-widest flex gap-x-1 group items-center font-medium text-[14px] cursor-pointer text-darkBlue px-4 relative"
    >
      CONTINUE READING
      <div className="relative w-6 h-6 overflow-hidden">
        <IoIosArrowRoundForward
          className={`absolute transition-transform duration-500 ${hovered ? 'translate-x-6 opacity-0' : 'translate-x-0 opacity-100'}`}
          size={26}
        />
        <IoIosArrowRoundForward
          className={`absolute  transition-transform duration-500 ${hovered ? 'translate-x-0 opacity-100' : '-translate-x-6 opacity-0'}`}
          size={26}
        />
      </div>
    </div>
  );
};

export default BlogButton;