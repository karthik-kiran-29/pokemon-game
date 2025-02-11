import React, { useState, useEffect } from "react";
import BaseSetCard from "../components/BaseSetCard";

const BaseSetCollection = () => {
  const [baseSets, setBaseSets] = useState([]);
  
  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/base-sets")
      .then(res => res.json())
      .then(res => {
        setBaseSets(res.data);
        console.log(res);
      });
  }, []);

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Base Set Collection
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {baseSets.map((card, index) => (
          <BaseSetCard 
            key={card.id || index} 
            {...card} 
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
};

export default BaseSetCollection;