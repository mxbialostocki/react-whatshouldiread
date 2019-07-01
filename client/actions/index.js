import request from 'superagent'

export const RETRIEVE_ALL_TITLES = 'RETRIEVE_ALL_TITLES'
export const RECIEVE_TITLES = 'RECIEVE_TITLES'
export const REQUEST_TITLES = 'REQUEST_TITLES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const ACTIVE_PAGE_NOVELS = 'ACTIVE_PAGE_NOVELS'
export const ACTIVE_PAGE_SHORT_STORIES = 'ACTIVE_PAGE_SHORT_STORIES'
export const ACTIVE_PAGE_POETRY = 'ACTIVE_PAGE_POETRY'
export const ACTIVE_PAGE_AOTEAROA = 'ACTIVE_PAGE_AOTEAROA'

export const requestTitles = () => {
  return {
    type: REQUEST_TITLES
  }
}

export const recieveTitles = (titles) => {
  return {
    type: RECIEVE_TITLES,
    titles: titles.map(title => title)
  }
}

export const showError = (errorMessage) => {
  return {
    type: SHOW_ERROR,
    errorMessage: errorMessage
  }
}

export function retrieveAllTitles () {
  return (dispatch) => {
    request
      .get('/v1/books')
      .then(response => {
        dispatch(recieveTitles(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}

// State actions to change Active Page based on determination

export function activePageNovels () {
  return {
    type: ACTIVE_PAGE_NOVELS,
    activePage: 'novels'
  }
}

export function activePageShortStories () {
  return {
    type: ACTIVE_PAGE_SHORT_STORIES,
    activePage: 'short-stories'
  }
}

export function activePagePoetry () {
  return {
    type: ACTIVE_PAGE_POETRY,
    activePage: 'poetry'
  }
}

export function activePageAotearoa () {
  return {
    type: ACTIVE_PAGE_AOTEAROA,
    activePage: 'aotearoa'
  }
}
