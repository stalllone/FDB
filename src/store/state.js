import {loadWantedMovie,loadWatchedMovie} from '../components/js/cache';
// console.log(loadWantedMovie)
const state={
	movie:{},
	header:true,
	wantedMovies: loadWantedMovie(),// 想看的电影
	watchedMovies:loadWatchedMovie()//看过的电影
}

export default state