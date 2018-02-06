import React, { Component } from 'react'
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile'
import { connect } from 'react-redux'

import * as actions from '../redux/actions/action'
import Logo from './logo'

class Login extends Component{
	Register() {
		this.props.history.push('./Register');
	}
	render() {
		return (
			<div>
				<Logo />
				<List>
					<WhiteSpace />
					<InputItem>账号</InputItem>
					<WhiteSpace />
					<InputItem type="password">密码</InputItem>
					<WhiteSpace />
					<Button type="primary">登录</Button>
					<WhiteSpace />
					<Button type="primary" onClick={()=>this.Register()}>注册</Button>
				</List>
			</div>
		)
	}
}
var mapStateProps = state =>({
	state:state.userReducer
})
var mapDispathProps = actions;
export default connect(mapStateProps,actions)(Login);
