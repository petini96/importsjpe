// src/store/modules/team.js
export default {
    state() {
        return {
            teamPicked: null
        };
    },
    mutations: {
        setTeamPicked(state, teamPicked) {
            state.teamPicked = teamPicked;
        }
    }
};
