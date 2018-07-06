import jsonp from "./jsonp"

export function movieSearch(query, start, count) { // top250
  const url = 'https://api.douban.com/v2/movie/search';
  const data = Object.assign({},{
    q: query,
    start,
    count
  });
//return this.$http.get(url, {
//  params: data
//}).then((res) => {
//  return Promise.resolve(res.data);
//}).catch((err) => {
//  console.log(err);
//});
	return jsonp(url,data)
}

export function tagSearch(tag, start, count) { // top250
  const url = 'https://api.douban.com/v2/movie/search';
  const data = Object.assign({},{
    tag,
    start,
    count
  });
//return this.$http.get(url, {
//  params: data
//}).then((res) => {
//  return Promise.resolve(res.data);
//}).catch((err) => {
//  console.log(err);
//});
	return jsonp(url,data)
}


