import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

interface Pokemon {
  name: string;
  url?: string;
}

export const fetchPokemon = createAsyncThunk("pokemon/fetchPokemon", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await response.json();
  return data.results.map((pokemon: { name: string; url: string }) => ({
    name: pokemon.name,
    url: pokemon.url || ""
  }));
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: { list: [] as Pokemon[] },
  reducers: {
    removePokemon: (state, action) => {
      state.list = state.list.filter(pokemon => pokemon.name !== action.payload);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.list = action.payload;
    });
  },
});

export const { removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
