import React, { useState } from 'react';
import SearchBar from './Components/SearchBar';
import PokemonInfo from './Components/PokemonInfo';
import { getPokemonByName } from './pokemon-utilities/pokemon-utilities';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({});

  const onSearch = async () => {
    const pokemon = await getPokemonByName(pokemonName);
    setPokemon(pokemon);
  };

  return (
    <div className='App'>
      <div className='container'>
        <SearchBar
          pokemonName={pokemonName}
          setPokemonName={setPokemonName}
          onSearch={onSearch}
        />
      </div>
      <PokemonInfo
        pokemon={pokemon}
      />
    </div>
  );
}

export default App;
