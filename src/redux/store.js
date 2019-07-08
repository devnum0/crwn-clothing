import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'

const middlewards = [logger];


const store = createStore(rootReducer, applyMiddleware(...middlewards));

export default store;