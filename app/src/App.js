import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';
import { About } from './components';

//css
import './css/App.css';

class App extends Component {
  constructor() {
    super()
    this.keyup = this.keyup.bind(this);
  }
  componentWillMount() {
    
  }
  keyup(e) {
    var { action } = this.props;
    if( e.keyCode == 13 ){
      action.Add(e.target.value)
    }
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <h1>备忘录</h1>
        <input className="input" defaultValue="请输入待办事项" onKeyUp={ this.keyup }/> 
        <div className="nav">
          <li><Link to="/About/1">全部</Link></li>
          <li><Link to="/About/2">已完成</Link></li>
          <li><Link to="/About/3">未完成</Link></li>
        </div>
        <div>
          <Route path="/About/:id" component={ About }></Route>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  state:state.num
})
const mapDispatchToProps = dispatch=>({
  action:bindActionCreators(actions,dispatch),
  dispatch:dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
