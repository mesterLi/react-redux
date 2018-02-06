import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

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
					this.props.history.push('/Login')
				}
			})
	}
	render() {
		console.log(this.props)
		return null
	}
}
var mapStateProps = state =>{
	return {
		state:state
	}
}
export default connect(mapStateProps)(AuthRouter);