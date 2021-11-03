import React, { Component } from "react";
import PropTypes from "prop-types";

class ToDoList extends Component {
  render() {
    const { listTasks } = this.props;

    return (
      <div>
        <ul>
          { listTasks.map((task) => (<li key={task}>{task}</li>)) }
        </ul>
      </div>
    );
  }
}

ToDoList.propTypes = {
  listTasks: PropTypes.arrayOf.isRequired,
};

export default ToDoList;