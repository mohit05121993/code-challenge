import React from "react";

interface ListProps {
  pokemonList: { name: string; url?: string }[];
}

const List: React.FC<ListProps> = ({ pokemonList }) => {
  return (
    <div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {pokemonList.map((pokemon, index) => (
          <li key={index} style={{ margin: "8px 0", fontSize: "18px" }}>
            <span>#{index + 1} {pokemon.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
