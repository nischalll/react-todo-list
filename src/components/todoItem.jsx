import React from "react";
class TodoItem extends React.Component {
  render() {
    const { task, onDelete, onEdit } = this.props;
    return (
      <li className="list-group-item border-1 text-capitalize d-flex justify-content-between mb-2">
        <h6>{task}</h6>
        <div className="todo-icon">
          <span className="mx-2 text-success" onClick={onEdit}>
            <i style={{cursor: "pointer"}} className="fas fa-pen" />
          </span>
          <span className="mx-2 text-danger" onClick={onDelete}>
            <i style={{cursor: "pointer"}} className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}

export default TodoItem;
