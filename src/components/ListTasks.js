import React, { Component } from "react";
import ToDoList from "./ToDoList";

class InputTask extends Component {
  constructor(props){
    super(props);
    this.state = {
      listItem: "",
    };
  }
  
  render() {
    
    return (
      <div>

        <form>
        <input type="text" placeholder="Digite sua tarefa"/>
        <button>Adicionar</button>
        </form>

        <ToDoList />

      </div>
    );
  }
}

export default InputTask;
