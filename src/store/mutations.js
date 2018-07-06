import * as types from "./mutation-types"

const mutations={
	[types.SET_MOVIE](state,movie){
		state.movie=movie
	},
	[types.HIDE_HEADER](state,flag){
		state.header=flag
	},
	[types.SHOW_HEADER](state,flag){
		state.header=flag
	},
	[types.SET_WANTED_MOVIES] (state, movies) {
    	state.wantedMovies = movies;
    },
    [types.SET_WATCHED_MOVIES] (state, movies) {
    	state.watchedMovies = movies;
    }
}

export default mutations
