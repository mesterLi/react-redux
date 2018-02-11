import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Result, List, WhiteSpace, Button, Modal } from 'antd-mobile'
import { Redirect } from 'react-router-dom'
import BrowserCookies from 'browser-cookies'

import { Logout } from '../redux/actions/action'

@connect(
	state=>({
		state:state.userReducer
	}),
	{ Logout }
)
class Me extends Component{
	Loginout() {
		const alert = Modal.alert;
		alert('退出登录', '您确定退出登录？', [
		    { text: '取消', onPress: () => console.log(), style: 'default' },
		    { text: '确定', onPress: () => {
		    	BrowserCookies.erase('userid')
		    	this.props.Logout()
		    } },
		])
	}
	render() {
		const state = this.props.state;
		const { Item, Brief  } =List;
		const { pathname } = this.props.location;
		return state.name ? (
			<div>
				<Result 
					img={<img src={state.icon}/>}
					title={'姓名：'+state.name}
					message={state.type}
				/>
				<WhiteSpace />
				<List renderHeader={()=>'个人简介'}>
					<Item>描述<Item.Brief>{state.condition}</Item.Brief></Item>
					<WhiteSpace />
					{state.company ? (<div><Item>公司<Item.Brief>{state.company}</Item.Brief></Item><WhiteSpace /></div>):null}
					<Button type="primary" onClick={()=>this.Loginout()}>退出登录</Button>
				</List>
			</div>
		) : <div>{this.props.history.push(state.linkTo)}</div>
	}
}

export default Me