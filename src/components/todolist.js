import React, { Component } from 'react';

export default class Todolist extends Component {
  render(){
    return(
      <li onClick={this.props.soujaBoy} > {this.props.todo}</li>
    )
  }

  handleClick(){
    console.log(this.props)
    this.props.soujaBoy()
  }
}
