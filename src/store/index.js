import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import {
	articleInitialState, articleMutations
}
from './mutation/article'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		articles: articleInitialState
	},
	actions,
	mutations: [articleMutations],
	strict: true,
	middlewares: debug ? [Vuex.createLogger()] : []
})