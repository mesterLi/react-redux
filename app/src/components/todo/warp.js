import React, { Component } from 'react';
import Todoitem from './todoitem';


class Todowrap extends Component {
	constructor(props) {
		super();
	}
	componentDidMount() {
		//console.log(this.props)
	}
	render() {
		{/*const textlist = this.props.state || [];
		const domlist = textlist.map(function(i,v) {
			return (<Todoitem key={v} item={i}/>)
		})*/}
		return (
			<div className="todowarp">
				{/*domlist*/}
			</div>
		)
	}
}
export default Todowrap;