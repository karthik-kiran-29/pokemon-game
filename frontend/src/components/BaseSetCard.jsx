import React from 'react';
import { Link } from 'react-router-dom';

const BaseSetCard = ({images,name,total}) => {
  return (
    <Link to={"/cards?baseset=" + name}>
    <div className="bg-white rounded-lg shadow-md overflow-hidden w-64 max-w-xs">
      <img 
        src={images.logo} 
        alt={name} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
        <h2 className="text-lg font-semibold text-gray-800">{total} Cards</h2>
      </div>
    </div>
    </Link>
  );
};

export default BaseSetCard;