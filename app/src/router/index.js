import { BrowserRouter, Route, Link, BrowserRouter } from 'react-router-dom';//react-router 4.0
import React, { Component } from 'react';
import App from '../App';
import Login from '../components/login';


export const route = (
    <BrowserRouter>
        <Route path="/" component={ App } ></Route>
        <Route path="/login" component={ Login } ></Route>
    </BrowserRouter>
)
