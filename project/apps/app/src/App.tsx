import { useEffect, useState } from "react";
import List from "ui/components/List";

interface Pokemon {
  name: string;
  url?: string;
}

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        const formattedData = data.results.map((pokemon: { name: string; url: string }) => ({
          name: pokemon.name,
          url: pokemon.url || ""
        }));
        setPokemonList(formattedData);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon List</h1>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default App;
