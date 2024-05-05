import React from 'react';

import ProteinSvg from '../data/protein.jsx'
import { MdOutlineFitnessCenter } from "react-icons/md";

const IconBar = () => {
  const iconStyle = { height: "22px", width: "22px" };
  return (
    <div className="flex justify-around w-full p-4 bg-gray-100">
      <ProteinSvg style={iconStyle}/>
      <MdOutlineFitnessCenter style={iconStyle}/>
    </div>
  );
};

export default IconBar;
