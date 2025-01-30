import React from 'react';

const PokemonCard = ({ pokemon }) => {
  // Helper function to render energy/type icons
  const renderEnergy = (type) => {
    const typeColors = {
      Psychic: 'bg-purple-500',
      Colorless: 'bg-gray-300',
      // Add more type colors as needed
    };

    return (
      <div className={`w-6 h-6 rounded-full ${typeColors[type]} flex items-center justify-center text-white text-xs`}>
        {type[0]}
      </div>
    );
  };

  return (
    <div className="w-80 rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-purple-50 to-white border-2 border-purple-200">
      {/* Header */}
      <div className="p-4 flex justify-between items-center border-b border-purple-100">
        <div className="flex items-center gap-2">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <span className="text-sm text-gray-500">Lv. {pokemon.level}</span>
        </div>
        <div className="text-right font-bold text-lg">HP {pokemon.hp}</div>
      </div>

      {/* Image */}
      <div className="p-4 bg-purple-50">
        <img
          src={pokemon.images.small}
          alt={pokemon.name}
          className="w-full rounded-lg"
        />
        <div className="text-xs text-center mt-1 text-gray-500">
          {pokemon.supertype} - {pokemon.subtypes.join(', ')}
        </div>
      </div>

      {/* Abilities */}
      {pokemon.abilities && pokemon.abilities.map((ability) => (
        <div key={ability._id.$oid} className="p-4 border-t border-purple-100">
          <div className="font-bold text-purple-700 mb-1">
            {ability.type}: {ability.name}
          </div>
          <p className="text-sm text-gray-600">{ability.text}</p>
        </div>
      ))}

      {/* Attacks */}
      {pokemon.attacks && pokemon.attacks.map((attack) => (
        <div key={attack._id.$oid} className="p-4 border-t border-purple-100">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-1">
              {attack.cost.map((energy, index) => (
                <div key={index}>{renderEnergy(energy)}</div>
              ))}
            </div>
            <div className="font-bold">{attack.name}</div>
            <div className="font-bold text-purple-700">{attack.damage}</div>
          </div>
          <p className="text-sm text-gray-600">{attack.text}</p>
        </div>
      ))}

      {/* Footer Info */}
      <div className="p-4 bg-purple-50 space-y-2">
        {/* Weakness */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">Weakness:</span>
          {pokemon.weaknesses.map((weakness, index) => (
            <div key={index} className="flex items-center gap-1">
              {renderEnergy(weakness.type)}
              <span className="text-sm">{weakness.value}</span>
            </div>
          ))}
        </div>

        {/* Retreat Cost */}
        <div className="flex items-center gap-2">
          <span className="text-sm font-bold">Retreat Cost:</span>
          <div className="flex gap-1">
            {pokemon.retreatCost.map((cost, index) => (
              <div key={index}>{renderEnergy(cost)}</div>
            ))}
          </div>
        </div>

        {/* Flavor Text */}
        <p className="text-xs italic text-gray-600 mt-2">{pokemon.flavorText}</p>

        {/* Artist Info */}
        <div className="text-xs text-gray-500 mt-2">
          Illus. {pokemon.artist} • {pokemon.rarity}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;