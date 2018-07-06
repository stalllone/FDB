import storage from "good-storage"

const WATCHED_KEY = '__watched__'; // 已经看过的电影
const WANTED_KEY = '__wanted__'; // 想看的电影

const WATCHED_MAX_LENGTH = 300;
const WANTED_MAX_LENGTH = 300;

// console.log(stor)


/*
* 想看的电影
*/

export function saveWantedMovie(movie) {
  const maxLen = WANTED_MAX_LENGTH;
  let movies = storage.get(WANTED_KEY, []); // 获取不到返回空数组
  // 查找缓存数组中是否包含添加的数据，返回索引
  const index = movies.findIndex((item) => {
    return item.id === movie.id;
  });
  if (index === -1) {
    movies.push(movie);
    // 超过最大长度时移除起始数据
    if (maxLen && movies.length > maxLen) {
      movies.shift();
    }
  } else { // 若已经存在了被标记的id，则代表用户进行了反操作，取消了喜欢
    movies.splice(index, 1);
  }
  storage.set(WANTED_KEY, movies); // 存入缓存
  return movies;
}
// 从缓存中读取
export function loadWantedMovie() {
  return storage.get(WANTED_KEY, []);
}


/*
	看多的电影
 */
export function saveWatchedMovie(movie){
	const maxLen=WATCHED_MAX_LENGTH;
	let movies=storage.get(WATCHED_KEY,[]);//获取不到返回空数组
	//查找缓存数组中是否包含添加的数据，返回索引
	const index=movies.findIndex((item)=>{
		return item.id===movie.id
	});
	if(index===-1){
		movies.push(movie);
		//超过最大长度时移除起始数据
		if(maxLen&&movies.length>maxLen){
			movies.shift()
		}
	}else{//若已经存在被标记的ID，则代表用户进行了取反操作，取消的喜欢
		movies.splice(index,1);
	}
	storage.set(WATCHED_KEY,movies);
	return movies;
}
//从缓存中读取数据
export function loadWatchedMovie(){
	return storage.get(WATCHED_KEY,[]);
}



