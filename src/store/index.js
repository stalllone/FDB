import Vue from "vue"
import Vuex from "vuex"
import mutations from "./mutations"
import * as getters from "./getters"
import state from "./state"
import * as actions from "./actions"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)

const debug=process.env.NODE_ENV!=="production"



export default new Vuex.Store({
	mutations,
	getters,
	state,
	actions,
	strict:debug,
	plugins:debug?[createLogger()]:[]
})





