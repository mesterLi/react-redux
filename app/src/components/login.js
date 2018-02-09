import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	Button, 
	WhiteSpace, 
	WingBlank, 
	List, 
	InputItem
} from 'antd-mobile'

import * as actions from '../redux/actions/action'
import Logo from './logo'

@connect(
	state=>({
		state:state.userReducer
	}),
	actions
)
class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			'name':'',
			'pwd':''
		}
	}
	Register() {
		this.props.history.push('./register');
	}
	handleChange(key,value) {
		this.setState({
			[key]:value
		})
	}
	Login() {
		this.props.Login(this.state);
	}
	render() {
		var { linkTo } = this.props.state;
		return (
			<div>
				<WingBlank>
					<Logo />
					<List>
						<WhiteSpace />
						<InputItem 
							onChange={(v)=>this.handleChange('name',v)}
						>账号</InputItem>
						<WhiteSpace />
						<InputItem 
						type="password" 
							onChange={(v)=>this.handleChange('pwd',v)}
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
