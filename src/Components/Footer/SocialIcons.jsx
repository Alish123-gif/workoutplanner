import React from "react";

const SocialIcons = ({ Icons }) => {
  return (
    <div className="text-teal-500">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-200 mx-1.5 text-xl hover:text-gray-100 hover:bg-sky-400
        duration-300  fill-black hover:fill-white hover:stroke-black stroke-white stroke-1"
        >
          {icon.link}
        </span>
      ))}
    </div>
  );
};

export default SocialIcons;
