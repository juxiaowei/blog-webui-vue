import {
	GET_MY_ARTICLE
}
from '../mutation-types'

// initial state
export const articleInitialState = {
	articles: []
}

// mutations
export const articleMutations = {

	[GET_MY_ARTICLE](state, articles) {
		state.articles = articles
	}

}