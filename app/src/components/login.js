import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { 
	Button, 
	WhiteSpace, 
	WingBlank, 
	List, 
	InputItem, 
	Toast 
} from 'antd-mobile'
import { connect } from 'react-redux'

import * as actions from '../redux/actions/action'
import Logo from './logo'

class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			'name':'',
			'pwd':''
		}
	}
	Register() {
		this.props.history.push('./Register');
	}
	handleChange(key,value) {
		this.setState({
			[key]:value
		})
	}
	Login() {
		this.props.Login(this.state);
		setTimeout(()=>{
			this.props.ClearMsg();
		})
	}
	render() {
		console.log(this.props.state)
		return (
			<div>
				{this.props.state.linkTo ? <Redirect to={this.props.state.linkTo}></Redirect> : null}
				{this.props.state.msg ? Toast.info(this.props.state.msg,2) : null}
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
					<Button type="primary" onClick={()=>this.Login()}>登录</Button>
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
