import React from 'react';

export default ({ pokemon }) => (
    <div className='container pokemon-basic-info' style={ pokemon.image ? { display: 'block'} : {display: 'none'}}>
        <div className='row'>
            <div className='col'>
                <PokemonImage
                    image={pokemon.image}
                />
            </div>
            <div className='col'>
                <PokemonDescription
                    name={pokemon.name}
                    height={pokemon.height}
                    baseExperience={pokemon.baseExperience}
                />
            </div>
        </div>
    </div>
)

const PokemonImage = ({ image }) => (
    <div className='pokemon-image'>
        <img src={image} alt='pokemon' />
    </div>
);

const PokemonDescription = ({ name, height, baseExperience }) => (
    <table className='table table-bordered'>
        <tbody>
            <tr>
                <th scope='col'>Name</th>
                <td>{name}</td>
            </tr>
            <tr>
                <th scope='col'>Height</th>
                <td>{height}</td>
            </tr>
            <tr>
                <th scope='col'>Base XP</th>
                <td>{baseExperience}</td>
            </tr>
        </tbody>
    </table> 
);
