import React from 'react';

export default ({ team, onSelect }) => (
    <table className='table table-sm table-striped'>
        <thead className='thead-dark'>
            <tr>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            {
                team.map((pokemon, index) => (
                    <tr key={index} className='table-row'>
                        <td onClick={() => onSelect(pokemon.name)}>
                            <img src={pokemon.image} alt={pokemon.name}/>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);