import React from 'react';

export default ({ pokemonName, setPokemonName, onSearch }) => (
    <div className='input-group search-bar'>
        <input type='text' className='form-control' value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} placeholder='Enter a Pokemon name...' />
        <div className='input-group-append'>
            <button className='btn btn-outline-primary' type='button' onClick={onSearch}>Search</button>
        </div>
    </div>
);