import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { userReducer, listReducer } from './reducer';

var reducers = combineReducers({userReducer,listReducer});

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
export default store;
