import React from 'react';

export default class Home extends React.Component {
    Submit() {
        document.getElementById('form').submit()
    }
    focus() {
        document.getElementById('password').setAttribute('type','password')
    }
    render() {
        return (
            <div className="content">
                <form id="form" action="asdasdasdasdasdsa">
                    <input type="text" name="hhh" defaultValue=""/>
                    <input id="password" type="text" name="ppp" defaultValue="" onFocus={this.focus.bind(this)}/>
                    <button onClick={this.Submit.bind(this)} className="submit"></button>
                </form>
            </div>
        )
    }
}