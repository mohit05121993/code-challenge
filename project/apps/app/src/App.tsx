import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon } from "./store/pokemonSlice";
import List from "ui/components/List";
import { RootState } from "./store/store";

const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  return (
    <>
      <h1>Pokemon List</h1>
      <List pokemonList={pokemonList} />
    </>
  );
};

export default App;
