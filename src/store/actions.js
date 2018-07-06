import * as types from "./mutation-types"
import {saveWantedMovie,saveWatchedMovie} from '../components/js/cache';


export const showHeader=function({commit,state}){
	commit(types.SHOW_HEADER,true)
}

export const hideHeader=function({commit,state}){
	commit(types.HIDE_HEADER,false)
}

export const markWantedMovie = function ({commit}, movie) {
	commit(types.SET_WANTED_MOVIES, saveWantedMovie(movie));
};

export const markWatchedMovie = function ({commit}, movie) {
	commit(types.SET_WATCHED_MOVIES, saveWatchedMovie(movie));
};