import React from 'react';

const InfoCard = ({ image, title, description, link }) => {
  return (
    <div className="m-4 bg-white rounded-lg shadow-lg overflow-hidden w-52">
      <img src={image} alt={title} className="w-full h-28 sm:h-44 object-cover" />
      <div className="p-4">
        <h5 className="text-md font-bold">{title}</h5>
        <p className="text-xs text-gray-600">{description}</p>
        <a href={link} className="inline-block mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg justify-end">
          Learn More
        </a>
      </div>
    </div>
  );
};

export default InfoCard;
