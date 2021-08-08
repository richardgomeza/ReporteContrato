import {createStore, combineReducers, compose, applyMiddleware} from 'redux'
// import thunk from 'redux-thunk'
// import { routerReducer } from 'react-router-redux';
import thunk from "redux-thunk";
import {persistStore, persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from 'redux-logger';
import contratosReduce from './Ducks/contratosDuck'
import userDuck from './Ducks/userDuck'
import authType from './Ducks/authTypeDuck'
// // import history from './history'; //composeEnhancers( applyMiddleware(routerMiddleware(history))

const rootReducer = combineReducers({
    contratos: contratosReduce,
    user: userDuck,
    // routing: routerReducer
})
const persistConfig = {
    key: authType,
    storage: storage,
    whitelist: [userDuck,contratosReduce,authType]
};
 
const persistedReducer = persistReducer(persistConfig, rootReducer);

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// export default function generateStore() {
//     console.log('Store generated' )
//     const store = createStore( rootReducer, composeEnhancers( applyMiddleware(thunk) ) ) 
//     return store
// }

const initialState = {};
// const middleware = [thunk];
const store = createStore(
    persistedReducer,
    initialState,
    compose(
        applyMiddleware(thunk,logger),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
const persistor = persistStore(store);
export  {persistor,store};
