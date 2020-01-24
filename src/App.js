import React, { useState } from 'react';
import uuid from 'react-uuid'

import SearchBar from './Components/SearchBar';
import PokemonInfo from './Components/PokemonInfo';
import PokemonTeam from './Components/PokemonTeam';
import { getPokemonByName } from './pokemon-utilities/pokemon-api';
import { saveTeamMember } from './Firebase/TeamDb';
import './App.css';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [teamId, setTeamId] = useState('');

  const onSelectPokemon = async (pokemonName) => {
    const pokemon = await getPokemonByName(pokemonName);

    if(!pokemon){
      setPokemon({});
      return;
    }

    setPokemon(pokemon);
  };

  const updatePokemonTeam = () => {
    if(Object.keys(pokemon).length === 0){
      return;
    }

    const newPokemonTeam = [];

    pokemonTeam.map((pokemon) => newPokemonTeam.push(pokemon));
    
    if(teamId === '') {
      const team = uuid()
      setTeamId(team);
      saveTeamMember(team, pokemon.id);
    } else {
      saveTeamMember(teamId, pokemon.id);
    }

    if(newPokemonTeam.length >= 6){
      newPokemonTeam.splice(0, 1);
    }

    newPokemonTeam.push(pokemon);
    setPokemonTeam(newPokemonTeam);
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='row'>
          <div className='col-3'>
            <PokemonTeam
              team={pokemonTeam}
              onSelect={onSelectPokemon}
            />
          </div>
          <div className='col-9'>
            <SearchBar
              pokemonName={pokemonName}
              setPokemonName={setPokemonName}
              onSearch={() => onSelectPokemon(pokemonName)}
              onAddToTeam={updatePokemonTeam}
            />
            <PokemonInfo
              pokemon={pokemon}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
