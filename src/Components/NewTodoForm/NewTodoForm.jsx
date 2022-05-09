import React, { useState } from "react";

import "./NewTodoForm.css";

function AddTodoModal({ onAddNewTodo }) {
  const [title, setTitle] = useState(null);

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (title === null) {
      return null;
    }
    onAddNewTodo(title);
  }

  return (
    <div className="new-form-div">
      <form className="form">
        <h1>Task</h1>
        <input
          className="input-field"
          type="text"
          value={title}
          onChange={onTitleChange}
          required
        />
        <button className="submit-button" type="submit" onClick={onFormSubmit}>
          Add New Task
        </button>
      </form>
    </div>
  );
}

export default AddTodoModal;
