<template>
	<div class="Topnav">
		<ul>
			<!-- <li>推荐</li>
			<li>搜素</li>
			<li>个人中心</li> -->
			<router-link tag="li" to="/recommendlist" class="recommend" active-class="active-recommend">
					<p class="icon"></p>
					<p class="txt">推荐</p>
			</router-link>

			<router-link tag="li" to="/search" class="search" active-class="active-search">
					<p class="icon"></p>
					<p class="txt">搜索</p>
			</router-link>

			<router-link tag="li" to="/person" class="person" active-class="active-person">
					<p class="icon"></p>
					<p class="txt">个人中心</p>
			</router-link>
		</ul>
	</div>
</template>
<script>
	
</script>
<style scoped>
	.Topnav{
		border-top: 1px solid #ccc;
		color: #aaa;
		font-size: 14px;
		/* background: #000; */
		/* padding: 5px 0; */
		box-sizing: border-box;
	}
	.Topnav ul{
		display: flex;
		justify-content: space-around;
		/* padding: 5px 0; */
	}
	.Topnav ul li{
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.Topnav ul li.recommend .icon{
		background-image:url(./featured.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.search .icon{
		background-image:url(./search.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.person .icon{
		background-image:url(./profile.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.active-recommend .icon{
		background-image:url(./featured-actived.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.active-search .icon{
		background-image:url(./search-actived.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.active-person .icon{
		background-image:url(./profile-actived.png);
		background-repeat: no-repeat;
		background-size: 20px 20px;
	}
	.Topnav ul li.active-recommend,.Topnav ul li.active-search,.Topnav ul li.active-person .txt{
		color: #000;
	}
	.Topnav ul li .icon{
		width: 20px;
		height: 20px;
	}
	.Topnav ul li .icon img{
		display: block;
		width: 100%;
	}
</style>