import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import {
	articleInitialState, articleMutations
}
from './mutation/article'
import {
	routerInitialState, routerMutations
}
from './mutation/router'
import {
	datetimeInitialState, historyInitialState, historyMutations
}
from './mutation/history'
import {
	shareInitialState, shareMutations
}
from './mutation/share'


Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
	state: {
		url:routerInitialState,
		params:'',
		articles: articleInitialState,
		historys: historyInitialState,
		datetime: datetimeInitialState,
		shares: shareInitialState
	},
	actions,
	mutations: [routerMutations,articleMutations, historyMutations, shareMutations],
	strict: debug,
	middlewares: debug ? [Vuex.createLogger()] : []
})