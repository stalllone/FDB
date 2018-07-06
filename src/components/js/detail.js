import jsonp from "./jsonp"


export function getDetail(id){
	const url = 'https://api.douban.com/v2/movie/subject/'+id

	const data=Object.assign({},{
		
	})

	return jsonp(url,data)
}