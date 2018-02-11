import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
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
		const {  msg } = this.props.state;
		return (
			<div>
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
