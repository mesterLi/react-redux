import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import {Provider} from 'react-redux';

import 'antd-mobile/dist/antd-mobile.css';
import './style/all.css'
import store from './redux/store'
import registerServiceWorker from './registerServiceWorker';
import { route } from './router/index'

ReactDOM.render(
	(<Provider store={ store }>
		{ route }
	</Provider>), 
	document.getElementById('root')
);
registerServiceWorker();
