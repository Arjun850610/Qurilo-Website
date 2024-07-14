import React from "react";

const ModulesCard = ({ module }) => {
  return (
    <div className="group">
      <div className="w-full min-h-[25rem] flex flex-col gap-4 border-[1px] border-zinc-500 transition-all ease-in-out duration-300 rounded-lg p-6 px-[30px] group-hover:bg-white">
        <img
          src={module.image}
          alt={module.moduleName}
          className="h-20 object-cover"
          style={{width: "max-content"}}
        />
        <h3 className="text-[2rem] font-bold mt-4 group-hover:text-black">
          {module.moduleName}
        </h3>
        <p className="mt-2 text-[1.1rem] text-zinc-400 group-hover:text-zinc-800">
          {module.moduleDescription}
        </p>
      </div>
    </div>
  );
};

export default ModulesCard;
