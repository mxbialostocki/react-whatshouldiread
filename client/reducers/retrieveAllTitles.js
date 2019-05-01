import { RECIEVE_TITLES } from '../actions'

function retrieveAllTitles (state = [], action) {
  switch (action.type) {
    case RECIEVE_TITLES:
      return action.titles

    default:
      return state
  }
}

export default retrieveAllTitles
