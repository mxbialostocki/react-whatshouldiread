import request from 'superagent'

export const RETRIEVE_ALL_TITLES = 'RETRIEVE_ALL_TITLES'
export const RECIEVE_TITLES = 'RECIEVE_TITLES'
export const REQUEST_TITLES = 'REQUEST_TITLES'
export const SHOW_ERROR = 'SHOW_ERROR'

export const requestTitles = () => {
  return {
    type: REQUEST_TITLES
  }
}

export const recieveTitles = (titles) => {
  return {
    type: RECIEVE_TITLES,
    titles: titles.map(title => title.data)
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
      .get('/api/v1/books')
      .then(response => {
        dispatch(recieveTitles(response.body))
      })
      .catch(err => {
        dispatch(showError(err.message))
      })
  }
}
