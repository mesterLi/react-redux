import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile'

import * as action from '../redux/actions/action'
import Logo from './logo'

class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			'name':'',
			'pwd':'',
			'repwd':''
		}
	}
	handlerChange(key,value) {
		this.setState({
			[key]:value
		})
	}
	Register() {
		axios.post('/user/register',this.state)
			.then((res)=>{
				console.log(res)
			})
	}
	render() {
		return (
			<div>
				<Logo />
				<List>
					<WhiteSpace />
					<InputItem 
					onChange={v=>this.handlerChange('name',v)}
					>账号</InputItem>
					<WhiteSpace />
					<InputItem 
					type="password"
					onChange={v=>this.handlerChange('pwd',v)}
					>密码</InputItem>
					<WhiteSpace />
					<InputItem 
					type="password"
					onChange={v=>this.handlerChange('repwd',v)}
					>确认密码</InputItem>
					<WhiteSpace />
					<Button type="primary" onClick={()=>this.Register()}>注册</Button>
				</List>
			</div>
		)
	}
}
var mapStateProps = state =>({
	state:state.user
})
var mapDispatchProps = action;
export default connect(mapStateProps,mapDispatchProps)(Register);
