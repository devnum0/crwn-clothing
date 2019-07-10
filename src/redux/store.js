import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'

const middlewards = [logger];


export const store = createStore(rootReducer, applyMiddleware(...middlewards));
export const persistor = persistStore(store);
export default {
    store,
    persistor
};