import React from 'react';

export default ({ team, onSelect }) => (
    <table className='table table-striped'>
        <thead>
            <tr>
                <th>Team</th>
            </tr>
        </thead>
        <tbody>
            {
                team.map((pokemon, index) => (
                    <tr key={index}>
                        <td onClick={() => onSelect(pokemon.name)}>
                            <img src={pokemon.image} alt={pokemon.name}/>
                        </td>
                    </tr>
                ))
            }
        </tbody>
    </table>
);