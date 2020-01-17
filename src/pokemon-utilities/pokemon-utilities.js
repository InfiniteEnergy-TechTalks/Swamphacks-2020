import { Pokedex } from 'pokeapi-js-wrapper';

const pokedex = new Pokedex();

export const getPokemonByName = async (name) => {
    try{
        const pokemon = await pokedex.getPokemonByName(name);

        return {
            name: pokemon.name,
            height: pokemon.height,
            baseExperience: pokemon.base_experience,
            moves: pokemon.moves,
            image: pokemon.sprites.front_default,
        };

    } catch (error) {
        console.log(`ERROR! Could not retrieve pokemon ${name}`, error);
        return {};
    }
}