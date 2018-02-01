import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import List from './components/list';
import './style/todolist.css'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      user:"",
      age:""
    }
  }
  componentWillMount() {

  }
  handleChange(e) {
    var e = e || window.event;
    switch(e.target.name){
      case 'user':
          this.setState({
            user:e.target.value
          })
      break;
      case 'age':
          this.setState({
            age:e.target.value
          })
      break;
      default:
          return;
    }
  }
  Add() {
    this.props.AddData({user:this.state.user,age:this.state.age});
    this.setState({
      user:"",
      age:""
    })
  }
  render () {
    return (
      <div>
        <h1 className="title">小练习</h1>
        <label>
          姓名<input value={this.state.user} name="user" onChange={this.handleChange.bind(this)}/>
        </label>
        <label>
          年龄<input value={this.state.age} name="age" onChange={this.handleChange.bind(this)}/>
        </label>
        <button onClick={this.Add.bind(this)}>添加</button>
        <List />
      </div>
    )
  }
}
const mapStateToProps = state =>({
  state:state
})
const mapDispatchToProps = actions;
export default connect(mapStateToProps,mapDispatchToProps)(App);

