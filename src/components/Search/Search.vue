<template>
	<div class="search">
		<SearchBox @query="onQueryChange" ref="searchBox"></SearchBox>
		<div class="taglist" v-show="!query">
			<div class="douban-tag tag">
				<span v-for="item in doubanTag" class="tag-item" @click="tagQuery(item)">{{item}}</span>
			</div>
			<div class="movie-tag tag">
				<span v-for="item in movieTag" class="tag-item" @click="tagQuery(item)">{{item}}</span>
			</div>
			<div class="country-tag tag">
				<span v-for="item in countryTag" class="tag-item" @click="tagQuery(item)">{{item}}</span>
			</div>
		</div>		
		<Scroll :data="movies" class="movielist" :pullup="pullup" @scrollToEnd="scrollToEnd" v-show="query">
			<Movielist :movies="movies" @select="selectMovie" :hasmore="hasmore"></Movielist>
		</Scroll>
		<div class="no-result" v-if="noResult">抱歉，暂无搜索结果 :(</div>
		<Loadmore :fullScreen="fullScreen" v-if="init"></Loadmore>
		<router-view></router-view>
	</div>
</template>
<script>
	import SearchBox from "../SearchBox/SearchBox"
	import Scroll from "../Scroll/Scroll"
	import Loadmore from "../Loadmore/Loadmore"
	import Movielist from "../Movielist/Movielist"
	import {mapMutations} from "vuex"
	import { movieSearch, tagSearch } from "../js/moviesearch"
	export default{
		data(){
			return {
				movies:[],
				pullup: true,
				cont:20,
				page:0,
				// tag:"",
				hasmore:true,
				doubanTag: ['经典', '豆瓣高分', '冷门佳片'],
		        movieTag: ['剧情', '爱情', '喜剧', '科幻', '动作', '悬疑', '治愈', '青春', '文艺'],
		        countryTag: ['日本', '韩国'],
		        tagSearch: false,
		        query:"",
		        dataFn: null,
		        fullScreen: true,
		        noResult: false,
		        init:false
			}
		},
		created() {
	    	this._selectType();
	    },
		methods:{
			tagQuery(query){
				// this.tagSearch=true
				this.query=query
				this.$refs.searchBox.setQuery(query)
				this.init=true
			},
			onQueryChange(query){
				this.query=query
				if(this.query.length){
					this.init=true
				}
				
			},
			_selectType() {
		        this.dataFn = this.tagSearch ? tagSearch : movieSearch;
		    },
		    search(){
		    	this.dataFn(this.query,this.page,this.cont).then((res)=>{
		    		this.movies=res.subjects
		    		this.init=false
		    		this._checkMore(res)
		    		// console.log(res);
		    	})
		    },
		    scrollToEnd(){
		    	this.page+=20
		    	this.dataFn(this.query,this.page,this.cont).then((res)=>{
		    		this.movies=this.movies.concat(res.subjects)
		    		
		    		this._checkMore(res)
		    	})

		    },
		    _checkMore(data) {
		        let movies = data.subjects;
		        console.log(movies);
		        if (!movies.length || data.start + data.count >= data.total) {
		          this.hasmore = false;
		        }
		    },
			selectMovie(item){
				this.$router.push({
					path:`/movie/${item.id}`
				})
				this.setMovie(item)
			// console.log(item)	
			},
			...mapMutations({
				setMovie:"SET_MOVIE"
			}),
		},
		components:{
			SearchBox,
			Scroll,
			Movielist,
			Loadmore
		},
		watch: {
	      query() {
	        this._selectType();
	        this.movies = []; // 清空数据
	        if (this.query) { // 搜索框有数据
	            this.search(); // 获得检索数据
	        }else{
	        	this.init=false
	        }
	      }
	    }
	}
</script>
<style scoped>
	.movielist{
		position: fixed;
	    top: 40px;
	    bottom: 44px;
	    width: 100%;
	    overflow: hidden;
	    margin: 0 18px;
	    /* display: none; */
	}
	.loading-content{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0,0.5);
	}
	.loading-content .loading{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #fff;
		font-size: 14px;
	}
	.taglist{
		position: relative;
		z-index: 111;
	}
	.tag-item{
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 5px;
		display: inline-block;
		margin-top:20px;
		margin-left:10px;
	}
</style>	

