import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import configureStore from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import * as router from './router';
console.log(router)

const store = configureStore();

ReactDOM.render(<Provider store={store}>{ router.route }</Provider>, document.getElementById('root'));
registerServiceWorker();
