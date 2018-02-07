import { BrowserRouter, Route, Link } from 'react-router-dom';//react-router 4.0
import React, { Component } from 'react';
import App from '../App';

import Login from '../components/login';
import Register from '../components/register';
import AuthRouter from '../components/authRouter';


export const route = (
    <BrowserRouter>
    	<div>
    		<Route path="/" component={ AuthRouter } ></Route>
    		<Route path="/login" component={ Login } ></Route>
    		<Route path="/register" component={ Register } ></Route>
    	</div>
	</BrowserRouter>
)
