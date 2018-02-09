import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch } from 'react-router-dom' 
import { 
	NavBar,  
	WhiteSpace,
	WingBlank,
	TabBar 
} from 'antd-mobile'

import { UpdateInfo, ClearMsg } from '../redux/actions/action'
import Footbar from './footbar'
import Boss from './boss'

function Genius() {
	return <h1>Boss</h1>
}
function Msglist() {
	return <h1>Boss</h1>
}
function Me() {
	return <h1>Boss</h1>
}
@connect(
	state=>({
		state:state.userReducer
	}),
	{ UpdateInfo, ClearMsg }
)
class Mainpage extends Component{
	constructor(props){
		super(props);
	}
	render() {
		const routePage = [
			{
				path:'/boss',
				component:Boss,
				icon:'boss',
				text:'牛人',
				hide:this.props.state.type=='genius',
				title:'牛人列表'
			},
			{
				path:'/genius',
				component:Genius,
				icon:'job',
				text:'Boss',
				hide:this.props.state.type=='boss',
				title:'Boss列表'
			},
			{
				path:'/msglist',
				component:Msglist,
				icon:'msg',
				text:'消息',
				hide:false,
				title:'消息列表'
			},
			{
				path:'/me',
				component:Me,
				icon:'user',
				text:'我的',
				hide:false,
				title:'个人中心'
			}
		];
		const { pathname } = this.props.location;
		return (
			<div>
				<NavBar>{
					routePage.map(v=>{
						if(v.path == pathname){
							return v.title
						}
					})
				}</NavBar>
				<WingBlank>
					<Switch>
						<Route path="/boss" component={Boss}></Route>
						<Route path="/genius" component={Genius}></Route>
						<Route path="/msglist" component={Msglist}></Route>
						<Route path="/me" component={Me}></Route>
					</Switch>
				</WingBlank>
				<Footbar menus = { routePage }/>
			</div>
		)
	}
}

export default Mainpage;