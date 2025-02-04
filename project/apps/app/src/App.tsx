import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemon, removePokemon } from "./store/pokemonSlice";
import List from "ui/components/List";
import { RootState } from "./store/store";
import "./index.css";

const App = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state: RootState) => state.pokemon.list);

  useEffect(() => {
    dispatch(fetchPokemon());
  }, [dispatch]);

  const handleRemove = (name: string) => {
    dispatch(removePokemon(name));
  };

  return (
    <>
      <h1 className="title">Pokemon List</h1>
      <List pokemonList={pokemonList} onRemove={handleRemove} />
    </>
  );
};

export default App;
