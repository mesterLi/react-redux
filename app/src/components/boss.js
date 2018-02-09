import React, { Component } from 'react'
import { Card } from 'antd-mobile'

class Boss extends Component{
	render() {
		const { Header, Body } = Card;
		return (
			<div>
				<Card>
					<Header></Header>
				</Card>
			</div>
		)
	}
}
export default Boss