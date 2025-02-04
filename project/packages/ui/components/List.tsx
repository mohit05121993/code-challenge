import React from "react";

interface ListProps {
  pokemonList: { name: string; url?: string }[];
}

const List: React.FC<ListProps> = ({ pokemonList }) => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(120px, 1fr))", gap: "10px", padding: "10px" }}>
      {pokemonList.map((pokemon, index) => (
        <div key={index} style={{ background: "#f8f9fa", padding: "10px", borderRadius: "8px", textAlign: "center", fontSize: "16px", fontWeight: "bold" }}>
          <span>#{index + 1} {pokemon.name}</span>
        </div>
      ))}
    </div>
  );
};

export default List;
