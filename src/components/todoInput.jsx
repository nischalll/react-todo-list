import React from "react";
class TodoInput extends React.Component {
  render() {
    const { value, name, onChange, onSubmit, editItem } = this.props;
    console.log(editItem);
    return (
      <div className="card card-body my-3">
        <form onSubmit={onSubmit}>
          <div className="input-group">
            <div className="input-group-text bg-primary  text-white">
              <i className="fas fa-book "></i>
            </div>
            <input
              type="text"
              className="form-control text-capitalize"
              placeholder="add a todo item"
              value={value}
              onChange={onChange}
              name={name}
            />
          </div>
          <div className="text-center container-fluid">
            <button
              className={
                editItem
                  ? "btn btn-success btn-block btn-sm mt-3"
                  : "btn btn-primary btn-block btn-sm mt-3"
              }
              type="submit"
            >
              {editItem ? "edit item" : "add item"}
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default TodoInput;
