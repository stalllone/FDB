<template>
	<div id="app" class="home">
		<Header v-show="headerShow"></Header>
		<keep-alive>
			<router-view v-if="$route.meta.keepAlive"></router-view>
		</keep-alive>
		<router-view v-if="!$route.meta.keepAlive"></router-view>
		<Botnav></Botnav>
	</div>
</template>
<script>
	import Header from "./components/Header/Header"
	import Botnav from "./components/Botnav/Botnav"
	import {mapGetters,mapActions} from "vuex"
	export default{
		computed:{
			...mapGetters([
	      		'headerShow'
	    	])
	    },
	    watch:{
	      $route(to,from){
	      	// console.log(this.headerShow);
	        // console.log(to.path);
	        if(to.path!="/recommendlist"){
	          this.$store.dispatch("hideHeader");
	        }else{
	          this.$store.dispatch("showHeader");
	        }

	        // if(to.path.indexOf('article')==-1){
	        //   this.$store.dispatch("showFooter");
	        // }else{
	        //   this.$store.dispatch("hideFooter");
	        // }

	      }
	    },
		components:{
			Header,
			Botnav
		}
	}

</script>
<style scoped>
	.home{
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		overflow: hidden;
		justify-content: space-between;
	}
	.content{
		flex: 1;
		margin: 0 18px;
	}
</style>