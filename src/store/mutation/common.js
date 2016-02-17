import {
	PAGE_PROGRESS_SHOW,
	PAGE_PROGRESS_CLOSE
}
from '../mutation-types'

// mutations
export const progressMutations = {

	[PAGE_PROGRESS_SHOW](state, isshow) {
		state.isshow = isshow
	},

	[PAGE_PROGRESS_CLOSE](state, isshow) {
		state.isshow = isshow
	}

}