import { combineReducers, createStore } from 'redux'
import { userReducer } from './userReducer'
import { driveReducer } from './driveReducer'

const rootReducer = combineReducers({
    user: userReducer,
    drive: driveReducer
})

export const store = createStore(rootReducer)