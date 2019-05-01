import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import retrieveAllTitles from './retrieveAllTitles'

export default combineReducers({
  errorMessage,
  retrieveAllTitles
})
