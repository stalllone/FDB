<template>
	<transition name="slide">
		<div class="register">
			<div class="back">
				<img src="./back.png" width="30" height="30" @click="back"/>
				<h1>注册</h1>
			</div>
			<div class="input">
				<div>
					<input type="text" name="username"  
						value="" 
						placeholder="请输入用户名" 
						v-model="username" @focus="userfocus" @blur="userblur"/>
					<p class="meg" :class="{success:usersuccess}" v-show="flag" ref="usertishi">5-25个字符，一个汉字为两个字符，推荐使用中文会员名</p>
				</div>
				<div>
					<input type="password" name="password"  
						value="" 
						placeholder="请输入密码" 
						v-model="password" @focus="pwdfocus" @blur="pwdblur"/>
					 <p class="meg" :class="{success:pwdsuccess}" v-show="flag1" ref="pwdtishi"></i>5-25个字符</p>
				</div>
				<input type="button" name=""  value="注册" @click="adduser"/>
			</div>
			<Confirm ref="confirm" text="注册成功请登录" @confirm="confirmlogin"></Confirm>
		</div>
	</transition>
</template>
<script>
	import Confirm from "../Confirm/Confirm"
	var db
	export default{
		data(){
			return {
				username:"",
				password:"",
				flag:false,
				flag1:false,
				usersuccess:false,
				pwdsuccess:false
			}
		},
		mounted(){
			this.createdSpl()
		},
		methods:{
			back(){
				this.$router.back()
			},
			adduser(){
				
				let username=this.username
				let pass=this.password
				if((this.usersuccess)&&(this.pwdsuccess)){
					db.transaction(function (tx) {  
					  tx.executeSql('CREATE TABLE IF NOT EXISTS USERS (username text, password text)');
					  tx.executeSql('INSERT INTO USERS (username,password) VALUES (?, ?)', [username,pass]);
					});
				}
				this.$refs.confirm.show()
			},
			userfocus(){
				this.flag=true
				this.$refs.usertishi.innerHTML='5-25个字符推荐字母数字加下划线组合！';
			},
			userblur(){
				var reg=/[^/w]/g;
			    if(this.username==''){
			        this.$refs.usertishi.innerHTML='不能为空！';
			    }else if(this.getlegth(this.username)<6){
			        this.$refs.usertishi.innerHTML='长度不能小于6个字符！';
			    }else if(this.getlegth(this.username)>25){
			        this.$refs.usertishi.innerHTML='长度不能大于25个字符！';
			    }else if(!reg.test(this.username)){
			    	this.$refs.usertishi.innerHTML='5-25个字符推荐字母数字加下划线组合！';
			    }else{
			        this.$refs.usertishi.innerHTML='ok！';
			        this.usersuccess=true
			    }
			},
			pwdfocus(){
				this.flag1=true
			},
			pwdblur(){
				var reg=/[^a-zA-Z]/g;
			    var reg1=/\D/g;
			    var m=this.findstr(this.password,this.password[0]);
			    if(this.password==''){
			        this.$refs.pwdtishi.innerHTML='密码不能为空！';
			    }else if(m==this.password.length){
			        this.$refs.pwdtishi.innerHTML='不能用相同字符！';
			    }else if(this.password.length<6||this.password.length>16){
			        this.$refs.pwdtishi.innerHTML='密码长度在6-16位字符之间！';
			    }else if(!reg.test(this.password)){
			        this.$refs.pwdtishi.innerHTML='不能都为字母！';
			    }else if(!reg1.test(this.password)){
			        this.$refs.pwdtishi.innerHTML='不能都为数字！';
			    }  
			    else{
			    	this.$refs.pwdtishi.innerHTML='ok！';
			    	this.pwdsuccess=true
			    }
			},
			findstr(str,n){//查找相同字符
				var tmp=0;
				for(var i=0;i<str.length;i++){
					if(str.charAt(i)==n){
						tmp++;
					}
				}
				return tmp;
			},
			getlegth(str){//获取字符个数
		    	return str.replace(/[^\x00-xff]/g,"xx").length
		   	},
		   	createdSpl(){
		   		db = openDatabase('userdb', '1.0', 'Test DB', 2 * 1024 * 1024);
		   	},
		   	confirmlogin(){
		   		this.$router.push({
					name:"Login"
				})
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
	.register{
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
	.meg{
		color: red;
	}
</style>
