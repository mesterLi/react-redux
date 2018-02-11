import React, { Component } from 'react'

function Publicform(Comp){
	return class Publicform extends Component{
		constructor(props) {
			super(props)
			this.state = {};
			this.handleChange = this.handleChange.bind(this);
		}
		handleChange(key,val){
			this.setState({
				[key]:val
			})
		}
		render() {
			return	<Comp propsState={ this.state } handleChange={this.handleChange}{...this.props}></Comp>
		}
	}
}
export default Publicform