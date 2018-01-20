import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/actions/action';
import { bindActionCreators } from 'redux';

class App extends Component {
  componentWillMount() {
    const { dispatch, action} = this.props;
    action.action1();
  }
  render () {
    console.log(this.props)
    return (
      <div>
        {this.props.state}
      </div>
    )
  }
}
const mapStateToProps = function(state){
  return {
    state:state.num
  }
}
const mapDispatchToProps = function(dispatch) {
  return {
    action:bindActionCreators(actions,dispatch),
    dispatch:dispatch
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);


