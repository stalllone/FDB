<template>
	<div class="person">
		<div class="top">
			<img src="../../assets/user_normal.jpg"  alt="" class="user" @click="plogin">
			<div class="user_detail">
				<div class="user_detail1">
					<p v-if="!username">游客</p>
					<p v-else>
						{{username}}
						<a href="javascript:;" @click="clear" style="margin-left: 20px;color: #fff;font-size: 16px;text-decoration: none;cursor: pointer;">退出</a>
					</p>
				</div>
				<div class="user_detail2">
					<span>关注</span>
					<span>被关注</span>
				</div>		
			</div>
		</div>
		<Switches @switch="switchItem" :currentIndex="currentIndex" :switches="switches"></Switches>
		<div class="list-wrapper" ref="listWrapper">
			<Scroll v-if="currentIndex===0" :data="wantedMovies" 
			class="list-scroll" ref="scroll">
				<div class="list-inner">
					<Movielist :movies="wantedMovies" @select="selectItem" :hasmore="hasmore" :needLoading="needLoading"></Movielist>
				</div> 
			</Scroll>
			<Scroll v-if="currentIndex===1" :data="watchedMovies" class="list-scroll" ref="scroll">
				<div class="list-inner">
					<Movielist :movies="watchedMovies" @select="selectItem" :hasmore="hasmore" :needLoading="needLoading"></Movielist>
				</div> 
			</Scroll>
		</div>
		<div class="noResult-wrap" v-show="noResult">
			<Noresult :title="noResultDesc"></Noresult>
		</div>
	</div>
</template>
<script>
	import Scroll from "../Scroll/Scroll"
	import Switches from "../Switch/Switch"
	import Noresult from "../Noresult/Noresult"
	import Movielist from "../Movielist/Movielist"
	import {mapMutations,mapGetters} from "vuex"
	import {setCookie,getCookie} from "../js/util"
	export default {
		data(){
			return {
				currentIndex:0,
				switches:[
					{name:"想看"},
					{name:"看过"}
				],
				hasmore:false,
				needLoading:false,
				username:""
			}
		},
		created(){
			this._getCookie()
		},
		computed:{
			noResult(){
				if(this.currentIndex===0){
					return !this.wantedMovies.length
					console.log('想看'+this.wantedMovies)
				}else{
					return !this.watchedMovies.length
					console.log('已看过'+this.watchedMovies)
				}
			},
			noResultDesc(){
				if(this.currentIndex===0){
					return "暂无想看的电影"
				}else{
					return "暂无看过的电影"
				}
			},
			...mapGetters([
				'wantedMovies',
				'watchedMovies'
			])
		},
		methods:{
			switchItem(index){
				this.currentIndex=index
				// console.log(this.wantedMovies);
				this.$nextTick(() => {
					this.$refs.scroll.scrollTo(0, 0);
					this.$refs.scroll.refresh();
				});
			},
			selectItem(item){
				this.$router.push({
					path:`/movie/${item.id}`
				})
				this.setMovie(item)
			},
			plogin(){
				this.$router.push({
					path:`/person/login`
				})
			},
			...mapMutations({
				setMovie:"SET_MOVIE"
			}),
			_getCookie(){
				this.username=getCookie("username")
			},
			clear(){
				setCookie("username","",7)
				this._getCookie()
			}
			
		},
		components:{
			Switches,
			Noresult,
			Movielist,
			Scroll
		}
	}
</script>
<style scoped>
	.top{
		width: 100%;
		height: 124px;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
	}
	.top .user{
		border-radius: 100%;
		margin: 20px 0 0 20px;
		width: 70px;
		height: 70px;
		border-radius: 100%;
		float: left;
	}
	.top .user_detail{
		margin-left: 10px;
		float: left;
		flex: 1;
	}
	.top .user_detail1{
		position: relative;
		padding-top: 29px;
		color: #fff;
		border-bottom: 1px solid rgba(255,255,255,0.3);
		padding-bottom: 5px;
	}
	.top .user_detail1 p:nth-of-type(1){
		font-size: 19px;
	}
	.top .user_detail2{
		margin-top: 5px;
		font-size: 14px;
		color: #fff;
	}
	.noResult-wrap{
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-50%);
	}
	.list-wrapper{
		position:absolute;
		top:175px;
		bottom:40px;
		width:100%;
	}
	.list-scroll{
		height:100%;
		overflow:hidden;
	}		
	.list-inner{
		padding:20px 15px;
	}		
				
				
					
</style>