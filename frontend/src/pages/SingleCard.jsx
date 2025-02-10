import React, { useState ,useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const SingleCard = () => {
  const { cardId } = useParams();
  const [pokemon,setPokemon] = useState([]);
  const [isLoading,setIsLoading] = useState(true);

  // Sample pokemon data - replace with your actual data fetching logic
  
  useEffect(()=>{
    fetch( process.env.REACT_APP_API_URL + "/cards/" + cardId) // add search bar login here bro
          .then(res => res.json())
          .then( res => {setPokemon(res.result[0]);setIsLoading(false)})
  },[])

  const renderEnergyType = (type) => {
    const typeColors = {
      Psychic: 'bg-purple-500',
      Colorless: 'bg-gray-300',
      Fire: 'bg-red-500',
      Water: 'bg-blue-500',
      Grass: 'bg-green-500',
      Electric: 'bg-yellow-500',
      Fighting: 'bg-orange-700',
      Dark: 'bg-gray-800',
      Dragon: 'bg-indigo-600',
      Fairy: 'bg-pink-400',
    };

    return (
      <div className={`w-8 h-8 rounded-full ${typeColors[type]} flex items-center justify-center text-white text-sm font-bold`}>
        {type[0]}
      </div>
    );
  };

  // Simple back arrow SVG
  const BackArrow = () => (
    <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  
  if(isLoading == true){
    return(<Loading/>);
  }


  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto mb-8">
        <button onClick={() => window.history.back()} className="flex items-center text-gray-600 hover:text-gray-900">
          <BackArrow />
          Back to Cards
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header Section */}
          <div className="bg-purple-50 p-8">
            <div className="flex flex-col md:flex-row gap-8">
              {/* Card Image */}
              <div className="w-full md:w-1/3">
                <img
                  src={pokemon.images.small}
                  alt={pokemon.name}
                  className="w-full rounded-lg shadow-md"
                />
              </div>

              {/* Card Details */}
              <div className="w-full md:w-2/3 space-y-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900">{pokemon.name}</h1>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-gray-600">Level {pokemon.level}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">HP {pokemon.hp}</span>
                      <span className="text-gray-400">•</span>
                      <span className="text-gray-600">{pokemon.rarity}</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {pokemon.types.map((type, index) => (
                      <div key={index}>{renderEnergyType(type)}</div>
                    ))}
                  </div>
                </div>

                {/* Type Info */}
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Supertype</h3>
                      <p className="mt-1 text-sm text-gray-900">{pokemon.supertype}</p>
                    </div>
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Subtypes</h3>
                      <p className="mt-1 text-sm text-gray-900">{pokemon.subtypes.join(', ')}</p>
                    </div>
                    {pokemon.evolvesFrom && (
                      <div>
                        <h3 className="text-sm font-medium text-gray-500">Evolves From</h3>
                        <p className="mt-1 text-sm text-gray-900">{pokemon.evolvesFrom}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Abilities */}
                {pokemon.abilities && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Abilities</h2>
                    {pokemon.abilities.map((ability, index) => (
                      <div key={index} className="space-y-2">
                        <h3 className="text-purple-600 font-medium">{ability.name} - {ability.type}</h3>
                        <p className="text-gray-600">{ability.text}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Attacks */}
                {pokemon.attacks && (
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h2 className="text-lg font-semibold text-gray-900 mb-4">Attacks</h2>
                    {pokemon.attacks.map((attack, index) => (
                      <div key={index} className="mb-4 last:mb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-2">
                            <div className="flex gap-1">
                              {attack.cost.map((energy, i) => (
                                <div key={i}>{renderEnergyType(energy)}</div>
                              ))}
                            </div>
                            <h3 className="font-medium text-gray-900">{attack.name}</h3>
                          </div>
                          <span className="font-bold text-purple-600">{attack.damage}</span>
                        </div>
                        <p className="text-gray-600">{attack.text}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Weaknesses and Retreat Cost */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Battle Information</h2>
                {pokemon.weaknesses && (
                  <div className="mb-4">
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Weaknesses</h3>
                    <div className="flex items-center gap-2">
                      {pokemon.weaknesses.map((weakness, index) => (
                        <div key={index} className="flex items-center gap-1">
                          {renderEnergyType(weakness.type)}
                          <span className="text-sm font-medium">{weakness.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                {pokemon.retreatCost && (
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 mb-2">Retreat Cost</h3>
                    <div className="flex gap-1">
                      {pokemon.retreatCost.map((cost, index) => (
                        <div key={index}>{renderEnergyType(cost)}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Card Details */}
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-900 mb-4">Card Details</h2>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Artist</h3>
                    <p className="mt-1 text-sm text-gray-900">{pokemon.artist}</p>
                  </div>
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">National Pokédex Number</h3>
                    <p className="mt-1 text-sm text-gray-900">#{pokemon.nationalPokedexNumbers.join(', ')}</p>
                  </div>
                  {pokemon.flavorText && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Pokédex Entry</h3>
                      <p className="mt-1 text-sm text-gray-600 italic">{pokemon.flavorText}</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;