import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import {
 Button, 
 Radio, 
 WhiteSpace, 
 WingBlank, 
 List, 
 InputItem
} from 'antd-mobile'

import * as action from '../redux/actions/action'
import Publicform from './publicform'
import Logo from './logo'
@connect(
	state=>({
		state:state.userReducer
	}),
	action
)
@Publicform
class Register extends Component{
	constructor(props){
		super(props)
	}
	componentDidMount() {
		this.props.handleChange('type','boss')
	}
	Login() {
		this.props.history.push('/login')
	}
	Register() {
		var { name, pwd, repwd, type } = this.props.propsState;
		this.props.Register({name,pwd,repwd,type});
	}
	render() {
		const RadioItem = Radio.RadioItem;
		const { pathname } = this.props.location;
		const { linkTo } = this.props.state; 
		return (
			<div>
				{ linkTo&&linkTo!=pathname ? <Redirect to={linkTo} /> : null}
				<WingBlank>
					<Logo />
					<List>
						<WhiteSpace />
						<InputItem 
						onChange={v=>this.props.handleChange('name',v)}
						>账号</InputItem>
						<WhiteSpace />
						<InputItem 
						type="password"
						onChange={v=>this.props.handleChange('pwd',v)}
						>密码</InputItem>
						<WhiteSpace />
						<InputItem 
						type="password"
						onChange={v=>this.props.handleChange('repwd',v)}
						>确认密码</InputItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.props.propsState.type == 'boss'}
						onChange={()=>this.props.handleChange('type','boss')}
						>老板</RadioItem>
						<WhiteSpace />
						<RadioItem 
						checked={this.props.propsState.type == 'genius'}
						onChange={()=>this.props.handleChange('type','genius')}
						>牛人</RadioItem>
						<WhiteSpace />
						<Button type="primary" onClick={()=>this.Login()}>登录</Button>
						<WhiteSpace />
						<Button type="primary" onClick={()=>this.Register()}>注册</Button>

					</List>
				</WingBlank>
			</div>
		)
	}
}
export default Register;
