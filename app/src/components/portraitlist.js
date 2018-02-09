import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { 
	List, 
	Grid, 
	InputItem,   
} from 'antd-mobile'

class Portraitlist extends Component{
	static PropsSelect = PropTypes.func.isRequired
	constructor(props){
		super(props)
		this.state = {
			icon:null,
			text:''
		}
	}
	PropsSelect(v) {
		this.props.onselect(v)
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
	render() {
		let icons = "boy,bull,chick,crab,girl,hedgehog,hippopotamus,koala,lemur,man,pig,tiger,whale,woman,zebra"
			.split(",")
			.map((val,key)=>({
				icon:require(`./images/${val}.png`),
				text:val.length > 5 ? val.slice(0,5) + '...' : val
			}))
		let headContent = () => {
			return this.state.icon ? <img src={this.state.icon} />  : '请选择头像';
		}
		return (
			<div>
				<List renderHeader={headContent}>
					<Grid 
					data={icons} 
					square={true}
					columnNum={5}
					onClick={(v)=>this.PropsSelect(v)}
				/>
				</List>
			</div>

		)
	}
}
export default Portraitlist;