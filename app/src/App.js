import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Nav from './components/nav/nav';
import { Home, Project, Setting, Active } from './components/child';
//css
import './css/App.css';

class App extends Component {
  componentWillMount() {
    
  }
  render () {
    return (
      <div>
        <Nav />
        <div>
          <Route path="/Home" component={Home}></Route>
          <Route path="/Project" component={Project}></Route>
          <Route path="/Setting" component={Setting}></Route>
          <Route path="/Active" component={Active}></Route>
        </div>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  state:state.ToDoList
})
const mapDispatchToProps = dispatch=>({
  action:bindActionCreators(actions,dispatch),
  dispatch:dispatch
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
