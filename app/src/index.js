import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';//react-router 4.0
import {Provider} from 'react-redux';

import Login from './components/login';
import Register from './components/register';
import 'antd-mobile/dist/antd-mobile.css';
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<Provider store={ store }>
		<BrowserRouter>
        	<div>
        		<Route path="/login" component={ Login } ></Route>
        		<Route path="/register" component={ Register } ></Route>
        	</div>
    	</BrowserRouter>
	</Provider>), 
	document.getElementById('root')
);
registerServiceWorker();
