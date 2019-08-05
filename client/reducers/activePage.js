import { UPDATE_ACTIVE_PAGE } from '../actions'

function activePage (state = 'all', action) {
  switch (action.type) {
    case UPDATE_ACTIVE_PAGE:
      return action.activePage

    default:
      return state
  }
}

export default activePage
