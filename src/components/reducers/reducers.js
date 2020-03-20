import { combineReducers } from 'redux'
import addDataReducer from './addDataReducer'
import onLikeReducer from './onLikeReducer'
import onSearchReducer from './onSearchReducer'

export default combineReducers({
    addDataReducer, onLikeReducer, onSearchReducer
})