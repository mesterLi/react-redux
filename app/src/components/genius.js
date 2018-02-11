import React, { Component } from 'react'
import { connect } from 'react-redux'
import { GetList } from '../redux/actions/action'
import Userlist from './userlist' 

@connect(
	state=>({
		state:state.listReducer
	}),
	{ GetList }
)
class Genius extends Component{
	componentDidMount() {
		this.props.GetList('boss')
	}
	render() {
		const state = this.props.state;
		return (
			<div>
				<Userlist userlist = { state }/>
			</div>
		)
	}
}
export default Genius