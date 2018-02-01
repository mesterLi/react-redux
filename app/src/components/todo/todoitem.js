import React, { Component } from 'react';

class Todoitem extends Component {
	constructor(props){
		super();
		this.state=props;
		console.log(props)
	}
	render() {
		return (
			<li>{this.state.item.text.data}</li>
		)
	}
}
export default Todoitem;