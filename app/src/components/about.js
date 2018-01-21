import React from 'react';
export default class About extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
  }
  render() {

    return (
      <div className="list">
      	<li> { this.props.match.params.id}</li>
      </div>
    );
  }
}