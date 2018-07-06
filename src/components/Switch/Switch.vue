<template>
	<div class="switch">
		<ul>
			<li class="switch-item" v-for="(item,index) in switches" 
			:class="{'active':currentIndex===index}" @click="switchItem(index)">
				<span>{{item.name}}</span>
			</li>
		</ul>
	</div>
	
</template>
<script>
	export default{
		props:{
			switches:{
				type:Array,
				default:[]
			},
			currentIndex:{
				type:Number,
				default:0
			}
		},
		methods:{
			switchItem(index){
				this.$emit("switch",index);
			}
		}
	}
</script>
<style scoped>
	.switch ul{
		display: flex;
		margin-top: 10px;
	}
	.switch li{
		flex: 1;
		text-align: center;
		height: 40px;
		line-height: 40px;
		font-size: 16px;
		color: #aaa;
	}
	.switch li.active{
		border-bottom: 1px solid green;
		color: green;
	}
</style>