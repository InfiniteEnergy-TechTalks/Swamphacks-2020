import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default ({ pokemonName, setPokemonName, onSearch, onAddToTeam }) => (
    <div className='input-group search-bar'>
        <input type='text' className='form-control' value={pokemonName} onChange={(event) => setPokemonName(event.target.value)} placeholder='Enter a Pokemon name...' />
        <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={onSearch}><i className="fa fa-search" aria-hidden="true"></i></button>
        </div>
        <div className='input-group-append'>
            <button className='btn btn-outline-secondary' type='button' onClick={onAddToTeam}><i className="fa fa-star" aria-hidden="true"></i></button>
        </div>
    </div>
);