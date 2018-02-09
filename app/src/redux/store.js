import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducer/userReducer';

var reducers = combineReducers({userReducer});

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware),
    window.devToolsExtension?window.devToolsExtension():f=>f
));
export default store;
