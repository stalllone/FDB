import jsonp from "./jsonp"


export function getMovieList(start,count){
	const url = 'https://api.douban.com/v2/movie/top250'

	const data=Object.assign({},{
		start,
    	count
	})

	return jsonp(url,data)
}