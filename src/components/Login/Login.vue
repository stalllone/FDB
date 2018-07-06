<template>
	<transition name="slide">
		<div class="login">
			<div class="back">
				<img src="./back.png" width="30" height="30" @click="back"/>
				<h1>登录</h1>
			</div>
			<div class="input">
				<div>
					<input type="text" name="username" v-model="username" ref="username"  value="" placeholder="请输入用户名"/>
				</div>
				<div>
					<input type="password" name="password" v-model="password"  value="" placeholder="请输入密码"/>
				</div>
				<input type="button" name=""  value="登录" @click="checkLogin"/>
				<p @click="register">没有账号点击注册</p>
			</div>
			<Confirm ref="confirm" :text="text" @confirm="confirmperson"></Confirm>
		</div>
	</transition>
</template>
<script>
	import Confirm from "../Confirm/Confirm"
	import {setCookie} from "../js/util"
	var db
	export default{
		data(){
			return {
				users:[],
				username:"",
				password:"",
				pwds:[],
				text:"登陆成功！"
			}
		},
		created(){
			this.createdSpl()
			this.fetchuser()
		},
		methods:{
			back(){
				this.$router.back()
			},
			register(){
				this.$router.push({
					path:`/person/register`
				})
			},
			checkLogin(){
				if((this.users.indexOf(this.username)!=-1)&&(this.pwds.indexOf(this.password)!=-1)){
					this.text="登陆成功！"
					this.$refs.confirm.show()
				}else{
					this.text="用户名或密码不正确!"
					this.$refs.confirm.show()
				}
				
			},
			createdSpl(){
		   		db = openDatabase('userdb', '1.0', 'Test DB', 2 * 1024 * 1024);
		   	},
		   	fetchuser(){
		   		let users=this.users
				let pwds=this.pwds
		   		db.transaction(function (tx) {
				   tx.executeSql('SELECT * FROM USERS', [], function (tx, results) {
				      var len = results.rows.length, i;
				      for (i = 0; i < len; i++){
//				         alert(results.rows.item(i).username );
							users.push(results.rows.item(i).username)
							pwds.push(results.rows.item(i).password)
				      }
				    
				   }, null);
				});	
//				console.log(setCookie)
		   	},
			confirmperson(){
				if((this.users.indexOf(this.username)!=-1)&&(this.pwds.indexOf(this.password)!=-1)){
					this.$router.push({
						name:"Person"
					})
					setCookie("username",this.username,7)
				}else{
					this.$refs.confirm.hide()
				}
			}
		},
		components:{
			Confirm
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
	.login{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		background: #fff;
	}
	.back{
		height: 40px;
		display: flex;
		align-items:center;
	}
	.back img{
		display: block;
	}
	.back h1{
		flex: 1;
		text-align: center;
		font-size: 16px;
	}
	.input{
		padding: 0.2rem 0.5rem;
	}
	.input input{
		display: block;
		width:100%;
		padding: 0.3rem 0;
		margin-top: 0.5rem;
		border: 1px solid #ccc;
		font-size: 15px;
		border-radius: 5px;
		-webkit-appearance: none;
	}
	.input input[name="username"],.input input[name="password"]{
		text-indent: 0.2rem;
	}
	.input p{
		margin-top: 0.2rem;
		font-size: 14px;
	}
</style>
