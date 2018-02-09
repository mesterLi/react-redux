import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Redirect } from 'react-router-dom'
import { Toast } from 'antd-mobile'
import axios from 'axios'

import { SuccessAcions, ClearMsg } from '../redux/actions/action'
@withRouter
@connect(
	state=>({
		state:state.userReducer
	}),
	{ SuccessAcions, ClearMsg }
)
class AuthRouter extends Component {
	componentDidMount() {
		const routePath = ['/Login','/Register'];
		const pathName = this.props.location.pathname;
		if(routePath.indexOf(pathName)>=1){
			return;
		}
		
		axios.get('/user/info')
			.then((res)=>{
				if(res.data.code != 0){
					this.props.history.push('/login')
				}else{
					this.props.SuccessAcions(res.data)
				}
			})
	}
	render() {
		const { pathname } = this.props.location;
		const authRouterList =['/boss','/bossinfo','/genius','/geniusinfo','/login','/register','/'];//authrouter只控制这6个页面
		const { linkTo, msg } = this.props.state;
		console.log(authRouterList.indexOf())
		return (
			<div>
				{linkTo&&linkTo !== pathname&&authRouterList.indexOf(pathname) >=0  ? <Redirect to={this.props.state.linkTo} /> : null}
				{msg ? Toast.info(msg,1):null}
			</div>
		)
	}
	componentDidUpdate() {
		if(this.props.state.msg){
			this.props.ClearMsg();
		}
	}
}
export default AuthRouter;