import React, { useState,useEffect } from 'react';



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
    setStage('collect');
  };

  const handleCollectClick = () => {
    setStage('revealed');
    setRevealedCards(pokemonCards);
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

      case 'collect':
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-5 gap-4 mb-8 opacity-50">
              {pokemonCards.map(card => (
                <div 
                  key={card._id} 
                  className="w-40 h-60 bg-gray-300 blur-sm"
                ></div>
              ))}
            </div>
            <button 
              onClick={handleCollectClick}
              className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition"
            >
              Collect Cards
            </button>
          </div>
        );

      case 'revealed':
        return (
          <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
            <div className="grid grid-cols-5 gap-4">
              {revealedCards.map(card => (
                <div 
                  key={card._id} 
                  className="w-40 h-60 bg-white shadow-lg rounded-lg overflow-hidden"
                >
                  <img 
                    src={card.images.large} 
                    alt={card.name} 
                    className="w-full h-full object-cover"
                  />
                  <div className="p-2 text-center">{card.name}</div>
                </div>
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