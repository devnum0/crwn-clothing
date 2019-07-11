import {createStore, applyMiddleware} from 'redux'
import logger from 'redux-logger'
import rootReducer from './root-reducer'
import {persistStore} from 'redux-persist'

const middlewards = [];

if(process.env.NODE_ENV === 'development'){
    middlewards.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewards));
export const persistor = persistStore(store);
export default {
    store,
    persistor
};