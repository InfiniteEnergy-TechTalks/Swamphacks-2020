import db from './Firebase';

const teamCollection = 'TEAMS';

export var saveTeamMember = async (teamId, pokemonID) => {
    try {
        const doc = db.firestore().collection(teamCollection).doc(teamId);
        const value = await doc.get();

        if (!value.exists) {
            doc.set({
                pokemonIDs: [ pokemonID ]
            })
        } else {
            const teamMembers = value.data().pokemonIDs;
            teamMembers.push(pokemonID);
            doc.set({
                pokemonIDs: teamMembers
            });
        }
    } catch (error) {
        console.log(`ERROR! Could not save pokemon ${pokemonID} to team ${teamId}`, error);
    }
};