import {
	GET_MY_SHARE
}
from '../mutation-types'

// initial state
export const shareInitialState = []

// mutations
export const shareMutations = {

  [GET_MY_SHARE](state, shares) {
    state.shares = shares
  }

}