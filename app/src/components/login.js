import React, { Component } from 'react'
import { Button, WhiteSpace, WingBlank, List, InputItem } from 'antd-mobile'
import Logo from './logo'

class Login extends Component{
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
				</List>
			</div>
		)
	}
}
export default Login;
