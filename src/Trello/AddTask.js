import React from "react";

class AddTasks extends React.Component {
  state = {
    inputSectionVisible: true,
    desc: "",
    title: ""
  };
  onClickPlus = () => {
    this.setState({
      inputSectionVisible: !this.state.inputSectionVisible
    });
  };
  onClickAdd = () => {
    const { type, addTask } = this.props;
    const { desc, title } = this.state;
    if (!desc || !title) return;
    addTask({
      type,
      desc,
      title
    });
  };
  render() {
    //const { type, addtask } = this.props;
    const { inputSectionVisible } = this.state;
    return (
      <div>
        <button className="plusBtn">+</button>
        {inputSectionVisible && (
          <div class="input-section">
            <input
              placeholder="Task Heading"
              onChange={ev => {
                this.setState({
                  title: ev.target.value
                });
              }}
            />
            <input
              placeholder="description"
              onChange={ev => {
                this.setState({
                  desc: ev.target.value
                });
              }}
            />
            <button className="add-task" onClick={this.onClickAdd}>
              Add Task
            </button>
          </div>
        )}
      </div>
    );
  }
}

export default AddTasks;
