import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducer/reducer';
export default function configureStore() {
    const store = createStore(reducer, compose(
        applyMiddleware(thunkMiddleware)
    ));
    return store;
}
