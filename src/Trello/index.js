import React from "react";
import "./index.css";
import * as taskConstants from "./task";
import TaskList from "./TaskList";

class TrelloBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: taskConstants.tasks.todo,
      inprogress: taskConstants.tasks.inprogress,
      done: taskConstants.tasks.done
    };
  }
  drag = (ev, listType, index) => {
    // console.log(ev, listType, index);
    ev.dataTransfer.setData(
      "text",
      JSON.stringify({
        listType,
        index
      })
    );
  };
  onDelete = (type, index) => {
    const typeArray = [...this.state[type]];
    typeArray.splice(index, 1);
    this.setState({
      ...this.state,
      [type]: typeArray
    });
  };
  ondragover = ev => {
    ev.preventDefault();
  };
  addTask = ({ type, desc, title }) => {
    const typeArr = [...this.state[type]];
    typeArr.push({
      name: title,
      description: desc,
      createAt: new Date()
    });
    this.setState({
      [type]: typeArr
    });
  };
  sameColLogic = (destType, destindex, originInfoObj) => {
    const originIndex = originInfoObj.index;
    if (!destindex) return;
    const typeArr = [...this.state[destType]];
    const copy = typeArr[destindex];
    typeArr[destindex] = typeArr[originIndex];
    typeArr[originIndex] = copy;
    debugger;
    this.setState({
      ...this.state,
      [destType]: typeArr
    });
  };
  onDropTask = (ev, typeList, index) => {
    ev.preventDefault();
    const data = JSON.parse(ev.dataTransfer.getData("text"));
    console.log("typeList, index, data", typeList, index, data);
    if (typeList === data.listType) {
      return this.sameColLogic(typeList, index, data);
    }
    const dataOriginType = data.listType;
    const indexOrigin = data.index;
    const targetType = typeList;
    const originStateList = [...this.state[dataOriginType]];
    const destinationStateList = [...this.state[targetType]];
    const dataToMove = originStateList.splice(indexOrigin, 1)[0];
    destinationStateList.push(dataToMove);
    this.setState({
      ...this.state,
      [targetType]: destinationStateList,
      [dataOriginType]: originStateList
    });
  };
  render() {
    const { todo, inprogress, done } = this.state;
    return (
      <div className="board-container">
        <div className="task-list-container">
          <TaskList
            list={todo}
            drag={this.drag}
            onDragOver={this.ondragover}
            onDropTask={this.onDropTask}
            onDelete={this.onDelete}
            addTask={this.addTask}
            type="todo"
          />
          <TaskList
            list={inprogress}
            drag={this.drag}
            onDragOver={this.ondragover}
            onDropTask={this.onDropTask}
            onDelete={this.onDelete}
            addTask={this.addTask}
            type="inprogress"
          />
          <TaskList
            list={done}
            drag={this.drag}
            onDragOver={this.ondragover}
            onDropTask={this.onDropTask}
            onDelete={this.onDelete}
            addTask={this.addTask}
            type="done"
          />
        </div>
      </div>
    );
  }
}

export default TrelloBoard;
