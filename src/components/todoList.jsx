import React from "react";
import TodoItem from "./todoItem";
class TodoList extends React.Component {
  render() {
    const { items, clearList, onDelete, onEdit } = this.props;
    return (
      <div>
        <ul className="list-group my-5">
          <h3 className="text-capitalize text-center">todo list</h3>
          {items.map((item) => (
            <TodoItem
              key={item.id}
              task={item.input.task}
              onDelete={()=>onDelete(item.id)}
              onEdit={()=>onEdit(item.id)}
            />
          ))}
          <button
            type="button"
            onClick={clearList}
            className="btn btn-danger btn-block text-capitalize mt-5"
          >
            clear list
          </button>
        </ul>
      </div>
    );
  }
}

export default TodoList;
