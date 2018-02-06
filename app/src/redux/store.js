import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunkMiddleware from 'redux-thunk';
import userReducer from './reducer/reducer';

var reducers = combineReducers({userReducer});

const store = createStore(reducers, compose(
    applyMiddleware(thunkMiddleware)
));
export default store;
