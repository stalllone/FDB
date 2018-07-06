<template>
	<div class="listitem">
		<ul>
			<li v-for="item in movies" @click="selectItem(item)">
				<div class="cover">
					<img v-lazy="'https://images.weserv.nl/?url='+getUrl(item.images.small)" width="80" height="120" alt="">
				</div>
				<div class="info">
					<h2 class="title">{{item.title}}</h2>
					<div class="rank">
						<Star :score="(item.rating.stars/10)"></Star>
						<span class="avescore">{{item.rating.average}}</span>
					</div>
					<div class="meta">
						<span v-for="item in item.casts">{{item.name}}/</span>
						<span v-for="item in item.genres">{{item}}/</span>
						<span v-for="item in item.directors">{{item.name}}</span>
						<span>({{item.year}})</span>
					</div>
				</div>
			</li>
			<Loadmore :hasmore="hasmore" v-show="movies.length&&needLoading"></Loadmore>
		</ul>
	</div>
</template>
<script>
	import Star from "../Stars/Stars"
	import Loadmore from "../Loadmore/Loadmore"
	export default{
		props:{
			movies:{
				type:Array,
				default:null
			},
			hasmore:{
				type:Boolean,
				default:true
			},
			needLoading:{
				type:Boolean,
				default:true
			}
		},
		methods:{
			getUrl(url){
				return url.substr(7);
			},
			selectItem(item){
				this.$emit("select",item);
			}
		},
		components:{
			Star,
			Loadmore
		}
	}
</script>
<style scoped>
	.listitem li{
		padding: 20px 18px 20px 0;
		/* display: flex; */
		overflow: hidden;
	}
	.listitem .cover{
		width: 75px !important;
		margin-right: 15px;
		float: left;
	}
	.listitem .info{
		overflow: hidden;
		display: flex;
		flex-direction: column;
		justify-content: space-around;

	}
	.listitem .info .title{
		font-size: 17px;
		color: #444;
		margin-bottom: 10px;
	}
	.listitem .info .rank{
		margin-bottom: 10px;
	}
	.listitem img{
		display: block;
		width: 75px;
		width: 100%;
	}
	.listitem .avescore{
		font-size: 16px;
	}
	.listitem .meta{
		color: #aaa;
	}
</style>