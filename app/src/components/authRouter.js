import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

import { LoadData } from '../redux/actions/action'

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
				}else{
					this.props.LoadData(res.data)
				}
			})
	}
	render() {
		return null
	}
}
var mapStateProps = state =>{
	return {
		state:state
	}
}
var mapDiapatchProps = { LoadData };
export default connect(mapStateProps,mapDiapatchProps)(AuthRouter);