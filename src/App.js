import React, { Component } from 'react';
import Todolist from "./components/todolist"

export default class App extends Component {
 constructor(){
    super()
    this.state = {
      todo:['vicken']
    };
    console.log(this.state)
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({todo: this.state.todo.concat([this.refs.input.value])});
  }

  soujaBoy(e) {
    e.preventDefault();
    console.log("yo it's me, souja boy")
    var value = e.target.innerHTML
    var deleteState = this.state.todo.filter((i,item) => i !== value)
    this.setState({todo:deleteState});
  }

  render(){
    return (
      <div id ="app">
        <form onSubmit={this.handleSubmit}>
          <input ref="input"/>
          <button id="submit" onClick={this.handleSubmit.bind(this)}>Add item</button>
          <p>keanu, go back to Switzerland!</p>
          <ul>
            {this.state.todo.map( (item,i) => {
                return <Todolist soujaBoy={this.soujaBoy.bind(this)} todo={item} key={i} />
              }
            )}
          </ul>

        </form>
      </div>
    )
  }
}
