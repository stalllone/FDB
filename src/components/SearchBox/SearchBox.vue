<template>
	<div class="search-wrap">
		<i><img src="../../assets/search.png" height="24" width="24" alt=""></i>
		<input type="text" :placeholder="placeholder" v-model="query" ref="query">
		<i><img src="../../assets/error.png" height="20" width="20" alt="" v-show="query" @click="clearquery"></i>
	</div>
</template>
<script>
	import {debounce} from "../js/util"
	export default{
		props:{
			placeholder:{
				type:String,
				default:"请输入搜索内容"
			}
		},
		data(){
			return {
				query:""
			}
		},
		methods:{
			clearquery(){
				this.query=""
			},
			setQuery(query){
				this.query=query
			},
			blur(){
				this.$refs.query.blur()
			}
		},
		created(){
			this.$watch("query",debounce((newQuery)=>{
				this.$emit("query",newQuery)
			},200))
		}
	}
</script>
<style scoped>
	.search-wrap{
		width: 100%;
		height: 40px;
		border-radius: 0px;
		background: #f5f5f5;
		display: flex;
		align-items: center
	}
	.search-wrap input{
		flex: 1;
		font-size: 14px;
		border:1px solid #f5f5f5;
		margin: 0 5px;
		background: #f5f5f5;
		height: 100%;
	}
	.search-wrap .searchBtn{
		width: 40px;
		height: 40px;
		line-height: 40px;
		text-align: center;
		font-size: 13px;
	}
</style>