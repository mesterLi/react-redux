import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/reducer';
const store = createStore(reducer, compose(
    applyMiddleware(thunkMiddleware)
));
export default store;
