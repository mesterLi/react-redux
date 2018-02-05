import React, { Component } from 'react'
var job = {
	fontSize:'40',
	color:'#000',
	textAlign:'center'
}
class Logo extends Component{
	render() {
		return (
			<div>
				<h1 style={job}>JOB</h1>
			</div>
		)
	}
}
export default Logo;
