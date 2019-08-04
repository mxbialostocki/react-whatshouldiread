import { combineReducers } from 'redux'

import errorMessage from './errorMessage'
import retrieveAllTitles from './retrieveAllTitles'
import activePage from './activePage'

export default combineReducers({
  errorMessage,
  retrieveAllTitles,
  activePage
})
