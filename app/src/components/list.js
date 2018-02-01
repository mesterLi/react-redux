import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions/action';

class List extends Component{
	constructor(props){
		super(props)
	}
	componentWillMount() {
		const { InitLoad } =this.props;
		InitLoad();
	}
	Remove(that,item) {
		this.props.RemoveData({id:item.id})
	}
	render() {
		console.log(this.props)
		const listdom = this.props.state.map(function(v,k,item) {
			return (
				<tr key={k}>
					<td>{v.user}</td>
					<td>{v.age}</td>
					<td>编辑</td>
					<td onClick={this.Remove.bind(this,v)}>删除</td>
				</tr>
			)
		},this)
		return (
			<div>
				<table>
					<tbody>
						<tr>
							<th>姓名</th>
							<th>年龄</th>
							<th>编辑</th>
							<th>删除</th>
						</tr>
						{listdom}
					</tbody>
				</table>
			</div>
		)
	}
}
var mapStateProps = (state) =>({
	state:state
})
var mapDispatchProps = actions;
export default connect(mapStateProps, mapDispatchProps)(List); 