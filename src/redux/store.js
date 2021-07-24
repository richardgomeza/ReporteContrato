import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import { routerReducer } from 'react-router-redux';

import contratosReduce from './contratosDuck.js'
// import history from './history'; //composeEnhancers( applyMiddleware(routerMiddleware(history))

const rootReducer = combineReducers({
    contratos: contratosReduce,
    routing: routerReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    console.log('Store generated' )
    const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) ) 
    return store
}