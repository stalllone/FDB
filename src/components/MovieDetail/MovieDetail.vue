<template>
	<transition name="slide">
		<div class="detail">
			<div class="back">
				<img src="./back.png" height="30" width="30" alt="" @click="back">
			</div>
			<Scroll :data="movieDetail" class="listmovie1" v-if="movieDetail!=''" ref="listmovie1">
				<div>
					<div class="content">
						<div class="poster">
							<img @load="loadImage" :src="'https://images.weserv.nl/?url='+getUrl(url)">
						</div>
						<div class="title">
							{{movieDetail[0].title}}
						</div>
						<div class="rank">
							<span>评分：</span>
							<span class="avescore">{{movieDetail[0].rating.average}}</span>
							<Star :score="(stars/10)"></Star>
						</div>
						<div class="meta director">
							<span>导演：</span>
							<span v-for="item in movieDetail[0].directors">{{item.name}}</span>
						</div>
						<div class="meta actor">
							<span>主演：</span>
							<span v-for="item in movieDetail[0].casts">{{item.name}}/</span>
						</div>
						<div class="operate">
					        <div class="want-watch"
					        	@click="saveWantedMovie"
					            :class="{'wanted': isWanted(movieDetail[0].id)}"
					            v-text="wantedText"
					        ></div>
					        <div class="has-watched"
					         	@click="saveWatchedMovie"
					         	:class="{'watched':isWatched(movieDetail[0].id)}"
					           
					        >
					        <img src="./avatar.jpg" alt="" v-show="hasWatched" width="25" height="25">
					        	{{watchedText}}
					        </div>
					    </div>		
						<div class="summary">
							<p>剧情简介</p>
							{{movieDetail[0].summary}}
						</div>
					</div>
				</div>
			</Scroll>
			<Loadmore :fullScreen="fullScreen" v-if="!movieDetail.length"></Loadmore>
		</div>
	</transition>
</template>
<script>
	import {mapGetters,mapActions} from "vuex"
	import Scroll from "../Scroll/Scroll"
	import Star from "../Stars/Stars"
	import Loadmore from "../Loadmore/Loadmore"
	import {getDetail} from "../js/detail"
	export default{
		data(){
			return {
				movieDetail:[],
				fullScreen: true,
				watchedText: '看过 ☆☆☆☆☆',
		        wanted: false,
		        wantedText: '想看',
		        hasWatched: false
			}
		},
		computed:{
			stars(){
				return this.movie.rating.stars
			},
			url(){
				return this.movie.images.large
			},
			...mapGetters([
				"movie",
				'wantedMovies',
				"watchedMovies"
			])
		},
		created(){
			this._getDetai()
		},
		methods:{
			_getDetai(){
//				this.$http.get("v2/movie/subject/"+this.movie.id).then((res)=>{
//					this.movieDetail.push(res.data)
//				}).catch((err)=>{
//					console.log('出错了')
//				})
				getDetail(this.movie.id).then((res)=>{
					this.movieDetail.push(res)
//					console.log(res);
				})

			},
			getUrl(url){
				return url.substr(7);
			},
			back(){
				this.$router.back()
			},
			loadImage(){
				if(!this.checkLoad){
					this.$refs.listmovie1.refresh()
					this.checkLoad=true
				}
			},
			saveWantedMovie() {
				this.markWantedMovie(this.movie);
				const index = this.wantedMovies.findIndex((item) => {
					return item.id === this.movie.id;
				});
				if (index > -1) {
					this.wantedText = '已想看';
					// console.log(this.wantedMovies)
				} else {
					this.wantedText = '想看';
					// console.log(this.wantedMovies)
				}
				// console.log('点击了xs')
			},
			isWanted(id) {
				const index = this.wantedMovies.findIndex((item) => {
					return item.id === id;
				});
				if (index > -1) {
					this.wantedText = '已想看';
					return true;
				}
					return false;
			},
			saveWatchedMovie(){
				this.markWatchedMovie(this.movie);
				const index=this.watchedMovies.findIndex((item)=>{
					return item.id===this.movie.id;
				});
				if(index>-1){
					this.hasWatched=true
					this.watchedText="已看过";
				}else{
					this.hasWatched=false
					this.watchedText="看过 ☆☆☆☆☆";
				}
			},
			isWatched(id){
				const index=this.watchedMovies.findIndex((item)=>{
					return item.id===id
				});
				if(index>-1){
					this.hasWatched=true;
					return true
				}
				return false
			},
			...mapActions([
				"markWantedMovie",
				"markWatchedMovie"
			])
		},
		components:{
			Scroll,
			Star,
			Loadmore
		}
		
	}
</script>
<style scoped>
	.slide-enter-active,.slide-leave-active{
		transition:all 0.3s
	}
	.slide-enter,.slide-leave-to{
		transform:translate3d(100%,0,0)
	}
	.detail{
		position: fixed;
		top: 0;
		left:0;
		bottom: 0;
		right: 0;
		background: #fff;
		z-index: 1;
	}
	.listmovie1{
		height: 100%;
		overflow: hidden;
		/* padding: 10px 0; */

	}
	.back{
		position: relative;
		top: 10px;
		left: 10px;
		height: 40px;
		
	}
	.content{
		width: 80%;
		margin: 0 auto;
		padding-bottom: 44px;
	}
	.content .poster img{
		display: block;
		margin: 0 auto;
		width: 100%;
	}
	.content .title{
		font-size: 17px;
		text-align: center;
		margin-top: 10px;
		color: #aaa;
	}
	.content .rank{
		font-size: 13px;
		color: #aaa;
		margin-top: 16px;
	}
	.content .meta{
		color: #aaa;
		margin-top: 5px;
	}
	.content .summary{
		font-size: 13px;
		color: #aaa;
		margin-top: 20px;

	}
	.content .summary p{
		font-size: 17px;
		margin-bottom: 8px;
	}
	.content .operate{
		margin-top: 20px;
		line-height: 35px;
		height: 35px;
		display: flex;
		text-align: center;
		font-size: 14px;
		color: #42bd56;
	}
	.content .want-watch {
		flex: 1;
        border: 1px solid #42bd56;
        border-radius: 5px;
        margin-right: 20px;
	}
	.content .want-watch.wanted{
		border: 1px solid #FE9800;
        color: #FE9800;
	}
	.content .has-watched{
		flex: 2;
        border: 1px solid #42bd56;
        border-radius: 5px;
	}
	.content .has-watched.watched{
		border: 1px solid #FE9800;
        color: #FE9800;
	}
	.content .has-watched.watched img{
		display: inline-block;
		vertical-align: middle;
		padding-bottom: 2px;
		border-radius: 50%;
	}
</style>
