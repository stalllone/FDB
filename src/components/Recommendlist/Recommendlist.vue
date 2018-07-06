<template>
	<div class="movielist content">
		<Scroll class="listmovie" :data="movies" ref="scroll" :pullup="pullup" @scrollToEnd="scrollToEnd">
			<Movielist :movies="movies" @select="selectItem" :hasmore="hasmore"></Movielist>
			
		</Scroll>
		<!-- <div class="loading-content"  v-show="hasmore">
			<Loading title="正在加载..."></Loading>
		</div> -->
		<Loadmore :fullScreen="fullScreen" v-if="!movies.length"></Loadmore>
		<router-view></router-view>
	</div>
</template>
<script>
	import Scroll from "../Scroll/Scroll"
	import Loading from "../Loading/Loading"
	import Movielist from "../Movielist/Movielist"
	import Loadmore from "../Loadmore/Loadmore"
	import {mapMutations} from "vuex"
	import {getMovieList} from "../js/recommend"
	export default{
		data(){
			return {
				movies:[],
				pullup: true,
				cont:20,
				page:0,
				hasmore:true,
				fullScreen: true
			}
		},
		mounted(){
			setTimeout(this.fetchData,5000)
		},
		methods:{
			fetchData(){
				getMovieList(this.page,this.cont).then((res)=>{
//					console.log(res)
					this.movies=res.subjects
					this.checkMore(res)
				})
			},
			
			scrollToEnd(){
				this.page+=20
				getMovieList(this.page,this.cont).then((res)=>{
//					this.movies=res.subjects
					this.movies=this.movies.concat(res.subjects)
					this.checkMore(res)
				})
			},
			refresh(){
				this.$refs.listmovie.refresh()
			},
			checkMore(data) {
		        let movies = data.subjects;
		        if (!movies.length || data.start + data.count >= data.total) {
		          this.hasmore = false;
		        }
		      },
			selectItem(item){
				this.$router.push({
					path:`/movie/${item.id}`
				})
				this.setMovie(item)
			},
			...mapMutations({
				setMovie:"SET_MOVIE"
			}),
		},
		components:{
			Scroll,
			// Loading,
			Movielist,
			Loadmore
		}
	}
</script>
<style scoped>
	.movielist{
		position: fixed;
		top: 44px;
		bottom: 44px;
		width: 100%;
	}
	.listmovie{
		height: 100%;
		overflow:hidden;
	}
	/* .loading-content{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: rgba(0, 0, 0,0.5);
	} */
	/* .loading-content .loading{
		position: fixed;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
		color: #fff;
		font-size: 14px;
	} */
</style>