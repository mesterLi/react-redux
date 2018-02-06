import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';//react-router 4.0
import {Provider} from 'react-redux';

import 'antd-mobile/dist/antd-mobile.css';
import store from './redux/store'
import Login from './components/login';
import Register from './components/register';
import AuthRouter from './components/authRouter';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	(<Provider store={ store }>
		<BrowserRouter>
        	<div>
        		<Route path="/" component={ AuthRouter } ></Route>
        		<Route path="/login" component={ Login } ></Route>
        		<Route path="/register" component={ Register } ></Route>
        	</div>
    	</BrowserRouter>
	</Provider>), 
	document.getElementById('root')
);
registerServiceWorker();
