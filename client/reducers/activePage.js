import { ACTIVE_PAGE_NOVELS, ACTIVE_PAGE_SHORT_STORIES, ACTIVE_PAGE_POETRY, ACTIVE_PAGE_AOTEAROA } from '../actions'

function activePage (state = [], action) {
  switch (action.type) {
    case ACTIVE_PAGE_NOVELS:
      return activePage.novels

    case ACTIVE_PAGE_SHORT_STORIES:
      return activePage.shortStories

    case ACTIVE_PAGE_POETRY:
      return activePage.poetry

    case ACTIVE_PAGE_AOTEAROA:
      return activePage.aotearoa

    default:
      return state
  }
}

export default activePage
