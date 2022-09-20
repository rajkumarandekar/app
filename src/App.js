import { Component } from "react";
import { v4 } from "uuid";
import "./App.css";
import TaskItem from "./components/TaskItem";

class App extends Component {
  state = { taskInput: "", taskList: [] };

  onAddTask = async (event) => {
    event.preventDefault();

    const { taskInput } = this.state;
    const newTask = {
      id: v4(),
      task: taskInput,
      isIconClicked: false,
    };

    this.setState((prevState) => ({
      taskList: [...prevState.taskList, newTask],
      taskInput: "",
    }));
  };

  onChangeTaskInput = (event) => {
    this.setState({
      taskInput: event.target.value,
    });
  };

  deleteTask = (taskId) => {
    const { taskList } = this.state;
    this.setState({
      taskList: taskList.filter((task) => task.id !== taskId),
    });
  };

  upEachTask = () => {
    const { taskList } = this.state;

    taskList.unshift(taskList.pop());
    this.setState({
      taskList: taskList,
    });
    console.log(taskList);
  };

  downEachTask = () => {
    const { taskList } = this.state;
    taskList.push(taskList.shift());
    this.setState({
      taskList: taskList,
    });
    console.log(taskList);
  };

  renderTaskList = () => {
    const { taskList } = this.state;
    return taskList.map((eachTask) => (
      <TaskItem
        key={eachTask.id}
        taskDetails={eachTask}
        deleteTask={this.deleteTask}
        onClickUp={this.upEachTask}
        onClickDown={this.downEachTask}
      />
    ));
  };

  render() {
    const { taskInput } = this.state;

    return (
      <>
        <div className="main-container">
          <ul className="task-list">{this.renderTaskList()}</ul>
          <form className="form" onSubmit={this.onAddTask}>
            <input
              type="text"
              placeholder="Add your Task here"
              value={taskInput}
              onChange={this.onChangeTaskInput}
              className="input"
            />
            <button type="submit" className="add-button">
              Add
            </button>
          </form>
        </div>
      </>
    );
  }
}
export default App;
