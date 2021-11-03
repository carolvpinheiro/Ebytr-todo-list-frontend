import React from "react";
import Header from "./Header";
import ListTasks from "./ListTasks";

class EbytrTasks extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <ListTasks/>
      </div>
    );
  }
}

export default EbytrTasks;
