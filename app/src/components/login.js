import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { 
	Button, 
	WhiteSpace, 
	WingBlank, 
	List, 
	InputItem
} from 'antd-mobile'

import * as actions from '../redux/actions/action'
import Publicform from './publicform'
import Logo from './logo'

@connect(
	state=>({
		state:state.userReducer
	}),
	actions
)
@Publicform
class Login extends Component{
	constructor(props){
		super(props)
	}
	Register() {
		this.props.history.push('./register');
	}
	Login() {
		this.props.Login(this.props.propsState);
	}
	render() {
		var { linkTo } = this.props.state;
		var { pathname } = this.props.location
		return (
			<div>
				{ linkTo&&linkTo!='/login' ? <Redirect to={linkTo} /> : null}
				<WingBlank>
					<Logo />
					<List>
						<WhiteSpace />
						<InputItem 
							onChange={(v)=>this.props.handleChange('name',v)}
						>账号</InputItem>
						<WhiteSpace />
						<InputItem 
						type="password" 
							onChange={(v)=>this.props.handleChange('pwd',v)}
						>密码</InputItem>
						<WhiteSpace />
						<Button type="primary" 
							onClick={()=>this.Login()}
						>登录</Button>
						<WhiteSpace />
						<Button type="primary" 
							onClick={()=>this.Register()}
						>注册</Button>
					</List>
				</WingBlank>
			</div>
		)
	}
}
export default Login;
