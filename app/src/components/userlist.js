import React, { Component } from 'react'
import { Card } from 'antd-mobile'
import propTypes from 'prop-types'

class Userlist extends Component{
	static userlist = propTypes.array.isRequired
	render() {
		const { Header, Body } = Card;
		const state = this.props.userlist;
		const content = state ? state.map(v=>{
				return(
					v.icon ? <Card key={v._id}>
						<Header
							title={v.name}
							thumb={v.icon}
							extra={<span>{v.type}</span>}
						>
						</Header>
						<Body>
						{ v.condition.split('\n').map(d=>{
							return <div key={d}>{d}</div>
						}) }
						{v.type == 'boss' ? <div>公司：{ v.company }</div> : null}
						</Body>
					</Card> : null
				)
		}) : null
		return (
			<div>
			{content}
			</div>
		)
	}
}
export default Userlist