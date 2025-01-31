import React from 'react';
import { Link } from 'react-router-dom';
import SingleCard from '../pages/SingleCard';

const PokemonCard = ({ pokemon }) => {
  
  return (
    <Link to={`/cards/${pokemon._id}`}>
        <div className="p-4 w-80">
        <img
          src={pokemon.images.small}
          alt={pokemon.name}
          className="w-full rounded-lg"
        />
        
      </div>
    </Link>
      
  )
};

export default PokemonCard;