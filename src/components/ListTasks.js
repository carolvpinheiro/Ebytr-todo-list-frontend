import React, { Component } from "react";
import ToDoList from "./ToDoList";

class InputTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputTask: "",
      listTasks: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(event) {
    this.setState({
      inputTask: event.target.value
    });
  }
  
  handleClick(event) {
    event.preventDefault();
    const { listTasks, inputTask } = this.state;
    this.setState({
      listTasks: [...listTasks, inputTask],
      inputTask: ""
    });
  }

  render() {
    const { listTasks, inputTask } = this.state;
    
    return (
      <div>

        <form>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={ inputTask }
          onChange={ this.handleInput }
        />
        <button onClick={ this.handleClick }>Adicionar</button>
        </form>

        <ToDoList listTasks={ listTasks } />

      </div>
    );
  }
}

export default InputTask;
