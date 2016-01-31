import {
	GET_MY_HISTORY
}
from '../mutation-types'

// initial state
export const historyInitialState = []
export const datetimeInitialState = []

// mutations
export const historyMutations = {

	[GET_MY_HISTORY](state, historys, datetime) {
		state.historys = historys
		state.datetime = datetime
	}

}