import { useEffect, useState } from "react";
import List from "ui/components/List";

interface Pokemon {
  name: string;
}

const api = "https://pokeapi.co/api/v2/pokemon?limit=151";

const App = () => {
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(api);
        const data = await response.json();
        setPokemonList(data.results);
      } catch (error) {
        console.error("Error fetching Pokémon:", error);
      }
    };

    fetchPokemon();
  }, []);

  return (
    <>
      <h1>Pokemon list:</h1>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default App;
