import React, { Component } from 'react'
import { connect } from 'react-redux'
import { 
	NavBar, 
	Icon, 
	WhiteSpace,
	InputItem,
	TextareaItem, 
	Button,
	Toast 
} from 'antd-mobile'

import Portraitlist from './portraitlist.js'
import { UpdateInfo, ClearMsg } from '../redux/actions/action'
class Geniusinfo extends Component{
	constructor(props){
		super(props);
		this.state = {
			condition:'',
			icon:'',
			text:'',
			company:''
		}
	}
	onSelect(v) {
		this.setState({
			icon:v.icon,
			text:v.text
		})
		
	}
	handleChange(key,val){
		this.setState({
			[key]:val
		})
	}
	Submit() {
		console.log(this.props)
		this.props.UpdateInfo(this.state)
		setTimeout(()=>{
			this.props.ClearMsg()
		})
	}
	render() {
		console.log(this.props.state)
		return (
			<div>
				{this.props.state.msg ? Toast.info(this.props.state.msg,2) : null}
				<NavBar
					icon={<Icon type="left" />}
				>Geniusinfo</NavBar>
				<Portraitlist onselect={(v)=>this.onSelect(v)}/>
				<WhiteSpace />
				<InputItem
					onChange={(v)=>this.handleChange('company',v)}
				>公司</InputItem>
				<WhiteSpace />
				<TextareaItem 
					rows="3"
					placeholder="要求"
					onChange={(v)=>this.handleChange('condition',v)}
				/>
				<WhiteSpace />
				<Button type="primary" onClick={()=>this.Submit()}>提交</Button>
			</div>
		)
	}
}
const mapStateProps = state => ({
	state:state.userReducer
});
const mapDispatchProps = { UpdateInfo, ClearMsg };
export default connect(mapStateProps,mapDispatchProps)(Geniusinfo);