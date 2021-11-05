import React, { Component } from "react";
import axios from "axios";
import ToDoList from "./ToDoList";

class InputTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputTask: "",
      statusTask: "Pendente",
      listTasks: []
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleOption = this.handleOption.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.onSubmite = this.onSubmite.bind(this);
  }

  handleInput(event) {
    this.setState({
      inputTask: event.target.value
    });
  }
  
  handleOption(event) {
    this.setState({
      statusTask: event.target.value
    });
  }

  // handleClick(event) {
  //   event.preventDefault();
  //   const { listTasks, inputTask, statusTask } = this.state;
  //   this.setState({
  //     listTasks: [...listTasks, { task: inputTask, status: statusTask }],
  //     inputTask: ""
  //   });
  // }

  onSubmite(e) {
    e.preventDefault();

    const newTask = {
      task: this.state.inputTask,
      status: this.state.statusTask
    };

    axios.post("http://localhost:5000/", newTask)
    .then((res) => console.log(res.data));

    this.setState({
      inputTask: "",
      statusTask: ""
    });
  }

  render() {
    const { listTasks, inputTask } = this.state;
    
    return (
      <div>

        <form onSubmit={this.onSubmite}>
        <input
          type="text"
          placeholder="Digite sua tarefa"
          value={inputTask}
          onChange={this.handleInput}
        />
        <button onClick={this.handleClick}>Adicionar</button>
        <select onChange={this.handleOption}>
          <option value="Pendente">Pendente</option>
          <option value="Em Anadamento">Em andamento</option>
          <option value="Pronto">Pronto</option>
        </select>
        </form>

        <ToDoList listTasks={ listTasks } />

      </div>
    );
  }
}

export default InputTask;
