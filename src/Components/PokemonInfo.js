import React from 'react';

export default ({ pokemon }) => (
    <div className='pokemon-basic-info' style={ pokemon.image ? { display: 'block'} : {display: 'none'}}>
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

const PokemonMoves = ({ moves }) => (
    <React.Fragment>
        <table className='table table-bordered'>
            <thead>
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
                        <tr key={index}>
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
