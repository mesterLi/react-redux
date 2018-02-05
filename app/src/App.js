import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import List from './components/list';
import './style/todolist.css'

class App extends Component {
  componentWillMount() {

  }
  render () {
    return (
      <div>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  state:state
})
const mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(App);

