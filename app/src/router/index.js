import { 
	BrowserRouter, 
	Route, 
	Link, 
	Switch 
} from 'react-router-dom';//react-router 4.0
import React, { Component } from 'react';
import App from '../App';

import Login from '../components/login';
import Register from '../components/register';
import AuthRouter from '../components/authRouter';
import Bossinfo from '../components/bossinfo';
import Geniusinfo from '../components/geniusinfo'
import Mainpage from '../components/mainpage'

export const route = (
    <BrowserRouter>
    	<div>
	    	<AuthRouter></AuthRouter>
	    	<div>
		    	<Switch>
		    		<Route path="/bossinfo" component={ Bossinfo } ></Route>
		    		<Route path="/geniusinfo" component={ Geniusinfo } ></Route>
		    		<Route path="/login" component={ Login } ></Route>
		    		<Route path="/register" component={ Register } ></Route>
		    		<Route component={ Mainpage } ></Route>
	    		</Switch>
	    	</div>
    	</div>
	</BrowserRouter>
)
