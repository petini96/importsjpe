// src/store/modules/league.js
export default {
    state() {
        return {
            leagueTitle: null,
            leagueComponent: null,
            leaguePicked: null
        };
    },
    mutations: {
        setLeaguePicked(state, leaguePicked) {
            state.leaguePicked = leaguePicked;
        },
        setLeagueTitle(state, leagueTitle) {
            state.leagueTitle = leagueTitle;
        }
    }
};
