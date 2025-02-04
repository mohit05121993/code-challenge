import React from "react";

interface ListProps {
  pokemonList: { name: string; url?: string }[];
  onRemove: (name: string) => void;
}

const List: React.FC<ListProps> = ({ pokemonList, onRemove }) => {
  return (
    <div className="pokemon-grid">
      {pokemonList.map((pokemon, index) => (
        <div key={index} className="pokemon-card" onClick={() => pokemon.url && window.open(pokemon.url, "_blank")}> 
          <span className="pokemon-name">{pokemon.name}</span>
          <button className="remove-button" onClick={(e) => { e.stopPropagation(); onRemove(pokemon.name); }}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
