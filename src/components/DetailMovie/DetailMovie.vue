<template>
	<div class="detail">
		<div class="back">
			<img src="./back.png" height="30" width="30" alt="" @click="back">
		</div>
		<!-- <Scroll :data="detailMovie" class="listmovie1">
			<div>
				<div class="content">
					<div class="poster">
						<img :src="'https://images.weserv.nl/?url='+getUrl(movieDetail.images.large)">
					</div>
					<div class="title">
						{{movieDetail.title}}
					</div>
					<div class="rank">
						<span>评分：</span>
						<span class="avescore">{{average}}</span>
						<Star :score="(stars/10)"></Star>
					</div>
					<div class="meta director">
						<span>导演：</span>
						<span v-for="item in movieDetail.directors">{{item.name}}</span>
					</div>
					<div class="meta actor">
						<span>主演：</span>
						<span v-for="item in movieDetail.casts">{{item.name}}/</span>
					</div>
					<div class="summary">
						<p>剧情简介</p>
						{{movieDetail.summary}}
					</div>
				</div>
			</div>
		</Scroll> -->
	</div>
</template>
<script>
	
	export default {
		props:{
			movies:{
				type:Array,
				default:null
			},
			title: {
		        type: String,
		        default: ''
		    },
		    stars:{
		    	type:String,
		    	default:""
		    },
		    url:{
		    	type:String,
		    	default:""
		    }
		},
		data(){
			return {
				ret:[]
			}
		},
		created(){
			this.getDetail();
		},
		methods:{
			back(){
				this.$router.back()
			},
			getDetail(){
				
			}
		}
	}
</script>
<style scoped>
	.detail{
		position: fixed;
		top: 0;
		left:0;
		bottom: 0;
		right: 0;
		background: #fff;
	}
	.listmovie1{
		height: 100%;
		overflow: hidden;
		padding: 10px 0;
	}
	.back{
		position: relative;
		top: 10px;
		left: 10px;
	}
	.content{
		width: 80%;
		margin: 0 auto;
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
</style>