import { Pokedex } from 'pokeapi-js-wrapper';

const pokedex = new Pokedex();

export const getPokemonByName = async (name) => {
    try{
        const pokemon = await pokedex.getPokemonByName(name);
        const moves = await getDetailedMoves(pokemon.moves);

        return {
            name: pokemon.name,
            height: pokemon.height,
            baseExperience: pokemon.base_experience,
            moves: moves,
            image: pokemon.sprites.front_default,
        };

    } catch (error) {
        console.log(`ERROR! Could not retrieve pokemon ${name}`, error);
        return null;
    }
}

const getMoveByName = async (name) => {
    try {
        const move = await pokedex.getMoveByName(name);

        return {
            name: move.name,
            power: move.power,
            accuracy: move.accuracy,
            pp: move.pp,
            type: move.type.name,
        };
    } catch (error) {
        console.log(`ERROR! Could not retrieve move ${name}`, error);
        return {};
    }
}

const getDetailedMoves = async (moves) => Promise.all(moves.map(async (move) => await getMoveByName(move.move.name)));