import React from "react";

interface ListProps {
  pokemonList: { name: string }[];
}

const List: React.FC<ListProps> = ({ pokemonList }) => {
  return (
    <ul>
      {pokemonList.map((pokemon, index) => (
        <li key={index}>{pokemon.name}</li>
      ))}
    </ul>
  );
};

export default List;
