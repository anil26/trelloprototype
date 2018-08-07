import React from "react";
import AddTask from "./AddTask";
import { mapName } from "./task";

class TaskList extends React.Component {
  onDrop = () => {};
  createList = () => {
    const { drag, ondragover, onDropTask, type, list, onDelete } = this.props;
    return list.map((item, index) => {
      return (
        <li
          id="test1"
          key={index}
          className="task-card"
          onDragStart={ev => drag(ev, type, index)}
          draggable={true}
          onDragOver={ev => {
            ev.preventDefault();
          }}
          onDragEnter={ev => {
            ev.preventDefault();
          }}
          onDrop={ev => {
            onDropTask(ev, type, index);
          }}
        >
          <li>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <button onClick={() => onDelete(type, index)}>Delete</button>
          </li>
        </li>
      );
    });
  };
  render() {
    const { list, type, onDropTask, addTask } = this.props;
    return (
      <ul
        draggable={true}
        onDragEnter={ev => {
          ev.preventDefault();
        }}
        onDragOver={ev => {
          ev.preventDefault();
        }}
        onDrop={ev => {
          onDropTask(ev, type);
        }}
        className="task-list"
      >
        <h2>{mapName[type]}</h2>
        {this.createList()}
        <AddTask type={type} addTask={addTask} />
      </ul>
    );
  }
}

export default TaskList;
