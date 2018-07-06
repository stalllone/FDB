<template>
	<div class="loading">
		<img src="./loading.gif" height="24" width="24" alt="">
		<p class="desc">{{title}}</p>
	</div>
</template>

<script>
	export default {
		props:{
			title:{
				type:String,
				default:'正在载入...'
			}
		}
	}
</script>

<style scoped>
	.loading{
		width:100%;
		text-align:center;
	}
	.desc{
		ling-height:20px
	}
</style>

