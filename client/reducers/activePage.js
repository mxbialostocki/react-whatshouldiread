import { UPDATE_ACTIVE_PAGE } from '../actions'

function activePage (state = 'all', action) {
  switch (action.type) {
    case UPDATE_ACTIVE_PAGE:
      return action.activePage

      // case ACTIVE_PAGE_SHORT_STORIES:
      //   return activePage.shortStories

      // case ACTIVE_PAGE_POETRY:
      //   return activePage.poetry

      // case ACTIVE_PAGE_AOTEAROA:
      //   return activePage.aotearoa

      // case ACTIVE_PAGE_MEMOIR:
      //   return activePage.memoir

    default:
      return state
  }
}

export default activePage
