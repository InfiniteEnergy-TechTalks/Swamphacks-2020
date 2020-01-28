import db from './Firebase';
import { getPokemonByName } from '../pokemon-utilities/pokemon-api';

const teamCollection = 'TEAMS';

export var saveTeamMember = async (teamId, pokemonName) => {
    try {
        const doc = db.firestore().collection(teamCollection).doc(teamId);
        const value = await doc.get();

        if (!value.exists) {
            doc.set({
                pokemonNames: [ pokemonName ]
            })
        } else {
            const teamMembers = value.data().pokemonNames;
            teamMembers.push(pokemonName);
            doc.set({
                pokemonNames: teamMembers
            });
        }

        return true;
    } catch (error) {
        console.log(`ERROR! Could not save pokemon ${pokemonName} to team ${teamId}`, error);
        return false;
    }
};

export var deleteTeamMember = async (teamId, pokemonName) => {
    try {
        const doc = db.firestore().collection(teamCollection).doc(teamId);
        const value = await doc.get();

        if (value.exists) {
            const teamMembers = value.data().pokemonNames.filter(item => item !== pokemonName);
            doc.set({
                pokemonNames: teamMembers
            });
        }

        return true;
    } catch (error) {
        console.log(`ERROR! Could not delete pokemon ${pokemonName} to team ${teamId}`, error);
        return false;
    }
};

export var getTeam = async (teamId) => {
    try {
        const doc = db.firestore().collection(teamCollection).doc(teamId);
        const value = await doc.get();

        if (!value.exists) {
            return {};
        } else {
            const teamMembers = value.data().pokemonNames;
            const result = [];

            for (const member of teamMembers) {
                result.push(await getPokemonByName(member));
            }

            return result;
        }
    } catch (error) {
        console.log(`ERROR! Could not retrieve team ${teamId}`, error);
        return false;
    }
}
