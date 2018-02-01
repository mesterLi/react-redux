import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';//react-router 4.0
import {Provider} from 'react-redux';

import App from './App';
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<Provider store={ store }>
		<BrowserRouter>
        	<Route path="/" component={ App } ></Route>
    	</BrowserRouter>
	</Provider>), 
	document.getElementById('root')
);
registerServiceWorker();
