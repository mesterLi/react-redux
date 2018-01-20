import React, { Component } from 'react';
import store from '../redux/store';

export default class Block extends Component {
    constructor(props) {
        super();
        this.state = store.getState();
        this.handlerClick = this.handlerClick.bind(this);
    }
    handlerClick() {
        var next = this.state.qizi == 'O' ? 'X' : 'O';
        var arr = this.state.arr;
        var index = this.props.item.index;
        arr[index] = this.state.qizi;
        store.dispatch({type:'play',data:{qizi:next,arr:arr}})
    }
    render() {
        return(
            <div className="block" onClick={this.handlerClick}>{this.props.item.value == null ? '' : this.props.item.value}</div>
        )
    }
}