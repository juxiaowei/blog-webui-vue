import {
	SWITCH_ROUTER
}
from '../mutation-types'

// initial state
export const routerInitialState = '/'

// mutations
export const routerMutations = {

	[SWITCH_ROUTER](state, trasition) {
		if (trasition) {
			state.url = transition.to.path;
			state.params = transition.to.params;
		}
	}

}