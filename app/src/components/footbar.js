import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TabBar } from 'antd-mobile'
import { withRouter } from 'react-router-dom'
import propTypes from 'prop-types'

import { UpdateInfo, ClearMsg } from '../redux/actions/action'

@withRouter
@connect(
	state=>({
		state:state.userReducer
	}),
	{ UpdateInfo, ClearMsg }
)
class Footbar extends Component{
	static menus = propTypes.array.isRequired;
	constructor(props){
		super(props);
	}
	render() {
		const { pathname } = this.props.location;
		const TabBarItem = TabBar.Item;
		const Menus = this.props.menus.filter(v=>{
			return !v.hide
		})
		const TabBarItems = Menus.map(v=>{
			return (
				<TabBarItem 
					title={ v.text } 
					key={ v.path }
					icon={{uri:require(`./images/${v.icon}.png`)}}
					selectedIcon={{uri:require(`./images/${v.icon}-active.png`)}}
					selected={pathname === v.path}
					onPress={()=>{this.props.history.push(v.path)}}
				/>
			)
		},this)
		return (
			<div className="foot-fixed">
				<TabBar unselectedTintColor="#333" tintColor="#33A3F4" >
					{TabBarItems}
				</TabBar>
			</div>
		)
	}
}

export default Footbar;