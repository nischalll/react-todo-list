import React, { Component } from "react";
import TodoInput from "./components/todoInput";
import TodoList from "./components/todoList";
import "bootstrap/dist/css/bootstrap.min.css";
import { v1 as uuid } from "uuid";

class App extends Component {
  state = {
    items: [],
    input: {
      task: "",
    },
    id: uuid(),
    editItem: false,
  };
  handleChange = ({ currentTarget }) => {
    const input = { ...this.state.input };
    input[currentTarget.name] = currentTarget.value;
    this.setState({ input });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const newInput = {
      id: this.state.id,
      input: this.state.input,
    };
    const updatedItems = [...this.state.items, newInput];

    this.setState({
      items: updatedItems,
      input: {
        task: "",
      },
      id: uuid(),
      editItem: false,
    });
  };

  handleDelete = (id) => {
    const items = [...this.state.items.filter((item) => id !== item.id)];
    this.setState({ items });
  };

  handleEdit = (id) => {
    const items = [...this.state.items.filter((item) => id !== item.id)];
    const selectedItem = this.state.items.find((item) => item.id === id);
    this.setState({
      items,
      input: { task: selectedItem.input.task },
      editItem: true,
      id:id,
    });
  };

  clearList = () => {
    this.setState({ items: [] });
  };

  render() {
    const { input } = this.state;
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
            <h3 className="text-capitalize text-center">
              <i className="fas fa-tasks" /> todo input
            </h3>
            <TodoInput
              value={input.task}
              onChange={this.handleChange}
              name="task"
              onSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              clearList={this.clearList}
              onDelete={this.handleDelete}
              onEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
