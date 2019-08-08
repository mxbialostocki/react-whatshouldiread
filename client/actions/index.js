import request from 'superagent'

export const RETRIEVE_ALL_TITLES = 'RETRIEVE_ALL_TITLES'
export const RECIEVE_TITLES = 'RECIEVE_TITLES'
export const REQUEST_TITLES = 'REQUEST_TITLES'
export const SHOW_ERROR = 'SHOW_ERROR'
export const UPDATE_ACTIVE_PAGE = 'UPDATE_ACTIVE_PAGE'

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

export function activePageAll () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'all'
  }
}

export function activePageNovels () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'novel'
  }
}

export function activePageShortStories () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'stories'
  }
}

export function activePagePoetry () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'poetry'
  }
}

export function activePageAotearoa () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'aotearoa'
  }
}

export function activePageMemoir () {
  return {
    type: UPDATE_ACTIVE_PAGE,
    activePage: 'memoir'
  }
}
