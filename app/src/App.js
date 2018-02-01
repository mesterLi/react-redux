import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import reducer from './redux/reducer/reducer';
import { bindActionCreators } from 'redux';
import { Link, Route } from 'react-router-dom';
import './style/todolist.css'

class App extends Component {
  componentWillMount() {
  }
  render () {
    console.log(this.props)
    return (
      <div>
        <h1 className="title">小练习</h1>
        <label>
          姓名<input defaultValue="" />
        </label>
        <label>
          年龄<input defaultValue="" />
        </label>
        <button>添加</button>
      </div>
    )
  }
}
const mapStateToProps = state =>({
  state:state
})
const mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(App);

