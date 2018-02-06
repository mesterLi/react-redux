import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
 Button, 
 Radio, 
 WhiteSpace, 
 WingBlank, 
 List, 
 InputItem,
 Toast
} from 'antd-mobile'

import * as action from '../redux/actions/action'
import Logo from './logo'

class Register extends Component{
	constructor(props){
		super(props)
		this.state = {
			'name':'',
			'pwd':'',
			'repwd':'',
			'type':'boss'
		}
	}
	handlerChange(key,value) {
		this.setState({
			[key]:value
		})
	}
	Login() {
		this.props.history.push('/Login')
	}
	Register() {
		var { name, pwd, repwd, type } = this.state;
		this.props.Register({name,pwd,repwd,type});
	}
	render() {
		const RadioItem = Radio.RadioItem;
		return (
			<div>
				<Logo />
				{this.props.state.msg!='' ? Toast.info(this.props.state.msg,2) : null}
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
					<RadioItem 
					checked={this.state.type == 'boss'}
					onChange={()=>this.handlerChange('type','boss')}
					>老板</RadioItem>
					<WhiteSpace />
					<RadioItem 
					checked={this.state.type == 'genius'}
					onChange={()=>this.handlerChange('type','genius')}
					>牛人</RadioItem>
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
var mapDispatchProps = action;
export default connect(mapStateProps,mapDispatchProps)(Register);
