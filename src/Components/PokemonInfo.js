import React from 'react';

export default ({ pokemon }) => (
    <div className='pokemon-basic-info' style={ pokemon.image ? { display: 'block'} : {display: 'none'}}>
        <div className='row'>
            <div className='col'>
                <PokemonImage
                    image={pokemon.image}
                />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <PokemonDescription
                    name={pokemon.name}
                    height={pokemon.height}
                    baseExperience={pokemon.baseExperience}
                />
            </div>
        </div>
        <div className='row'>
            <div className='col'>
                <PokemonMoves
                    moves={pokemon.moves}
                />
            </div>
        </div>
    </div>
)

const PokemonImage = ({ image }) => (
    <div className='pokemon-image'>
        <img className='figure-img img-fluid rounded' src={image} alt='pokemon' />
    </div>
);

const PokemonDescription = ({ name, height, baseExperience }) => (
    <React.Fragment>
        <div className='row justify-content-center'>
            <PokemonDescriptionBox
                pokemonProperty={name}
                pokemonPropertyType='Name'
            />
            <PokemonDescriptionBox
                pokemonProperty={height}
                pokemonPropertyType='Height'
            />
            <PokemonDescriptionBox
                pokemonProperty={baseExperience}
                pokemonPropertyType='Base XP'
            />
            </div>
    </React.Fragment>
);

const PokemonDescriptionBox = ({ pokemonProperty, pokemonPropertyType, color = '' }) => (
    <div className='pokemon-description-box'>
        <p className='pokemon-description-title-text'>{pokemonProperty}</p>
        <p className='pokemon-description-type-text'>{pokemonPropertyType}</p>
    </div>
);

const PokemonMoves = ({ moves }) => (
    <React.Fragment>
        <table className='table table-striped table-sm'>
            <thead className='thead-dark'>
                <tr>
                <th>Name</th>
                <th>Type</th>
                <th>PP</th>
                <th>Power</th>
                <th>Accuracy</th>
                </tr>
            </thead>
            <tbody>
            {
                moves && moves.map(
                    (move, index) => (
                        <tr className='table-row' key={index}>
                            <td>{move.name}</td>
                            <td>{move.type}</td>
                            <td>{move.pp}</td>
                            <td>{move.power}</td>
                            <td>{move.accuracy}</td>
                        </tr>
                    ))
            }
            </tbody>
        </table>
    </React.Fragment>
);
