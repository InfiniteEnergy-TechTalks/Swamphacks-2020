import React, { useState } from 'react';
import uuid from 'react-uuid'

import SearchBar from './Components/SearchBar';
import PokemonInfo from './Components/PokemonInfo';
import PokemonTeam from './Components/PokemonTeam';
import { getPokemonByName } from './pokemon-utilities/pokemon-api';
import { saveTeamMember, getTeam, deleteTeamMember } from './Firebase/TeamDb';
import './App.css';
import TeamIdBar from './Components/TeamIdBar';

function App() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemon, setPokemon] = useState({});
  const [pokemonTeam, setPokemonTeam] = useState([]);
  const [teamId, setTeamId] = useState('');

  const onSelectPokemon = async (pokemonName) => {
    const pokemon = await getPokemonByName(pokemonName);

    if(!pokemon) {
      setPokemon({});
      return;
    }

    setPokemon(pokemon);
  };

  const updatePokemonTeam = () => {
    if(Object.keys(pokemon).length === 0 || pokemonTeam.find(element => element.name === pokemon.name)) {
      return;
    }

    const newPokemonTeam = [];

    pokemonTeam.map((pokemon) => newPokemonTeam.push(pokemon));
    
    if(teamId === '') {
      const team = uuid()
      setTeamId(team);
      saveTeamMember(team, pokemon.name);
    } else {
      saveTeamMember(teamId, pokemon.name);
    }

    if(newPokemonTeam.length >= 6){
      deleteTeamMember(teamId, newPokemonTeam[0].name);
      newPokemonTeam.splice(0, 1);
    }

    newPokemonTeam.push(pokemon);
    setPokemonTeam(newPokemonTeam);
  }

  const onReload = async () => {
    setPokemonTeam(await getTeam(teamId));
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
            <TeamIdBar
              teamId={teamId}
              setTeamId={setTeamId}
              onReload={onReload}
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
