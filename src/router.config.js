// import Recommendlist from "./components/Recommendlist/Recommendlist"
// import Search from "./components/Search/Search"
// import Person from "./components/Person/Person"
// import MovieDetail from "./components/MovieDetail/MovieDetail"
const Recommendlist=(resolve)=>{
	import("./components/Recommendlist/Recommendlist").then((module)=>{
		resolve(module)
	})
}
const Search=(resolve)=>{
	import("./components/Search/Search").then((module)=>{
		resolve(module)
	})
}
const Person=(resolve)=>{
	import("./components/Person/Person").then((module)=>{
		resolve(module)
	})
}
const MovieDetail=(resolve)=>{
	import("./components/MovieDetail/MovieDetail").then((module)=>{
		resolve(module)
	})
}
const Login=(resolve)=>{
	import("./components/Login/Login").then((module)=>{
		resolve(module)
	})
}
const Register=(resolve)=>{
	import("./components/Register/Register").then((module)=>{
		resolve(module)
	})
}
export default[
	{
		path:"/recommendlist",
		component:Recommendlist,
		meta: {keepAlive: true}
	},
	{
		path:"/search",
		component:Search,
		meta: {keepAlive: false}
	},
	{
		path:"/person",
		component:Person,
		name:"Person",
		meta: {keepAlive: false}
	},
	{
		path:"/person/login",
		component:Login,
		name:"Login",
		meta: {keepAlive: false}
	},
		{
		path:"/person/register",
		component:Register,
		meta: {keepAlive: false}
	},
	{
		path:"/movie/:movieid",
		component:MovieDetail,
		meta: {keepAlive: false}
	},
	{
		path:"/",
		redirect:"/recommendlist"
	},{
		path:"*",
		redirect:"/recommendlist"
	}

]





