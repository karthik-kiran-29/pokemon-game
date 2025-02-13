import React, { useState,useEffect } from 'react';
import PokemonCard from '../components/PokemonCard';



const Daily = () => {
  const [stage, setStage] = useState('initial');
  const [revealedCards, setRevealedCards] = useState([]);
  const [pokemonCards,setPokemonCards] = useState([]);

  useEffect(()=>{
    fetch( process.env.REACT_APP_API_URL + "/random") 
          .then(res => res.json())
          .then( res => {setPokemonCards(res.result);console.log(res)})
  },[])

  const handleLoginClick = () => {
    setStage('revealed');
  };

  const renderContent = () => {
    switch(stage) {
      case 'initial':
        return (
          <div className="flex flex-col items-center justify-center h-screen p-4">
            <button 
              onClick={handleLoginClick}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
            >
              Daily Login
            </button>
          </div>
        );

      case 'revealed':
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-3 ">
              {pokemonCards.map(card => (
                     <PokemonCard pokemon={card}/>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-screen">
      {renderContent()}
    </div>
  );
};

export default Daily;