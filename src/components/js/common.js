export default class Movie{
	constructor({title,year,summary}){
		this.title=title
		this.year=year
		this.summary=summary
	}
}



export function createMovie(list){
	return new Movie({
		title:list.title,
		year:list.year,
		summary:list.summary
	})
}

function filterSinger(singer){
	let ret=[]
	if(!singer){
		return ""
	}
	singer.forEach((s)=>{
		ret.push(s.name)
	})
	return ret.join("/")
}