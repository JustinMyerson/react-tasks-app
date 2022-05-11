import React, { useState } from "react";

import "./NewTodoForm.css";

function AddTodoModal({ onAddNewTodo }) {
  const [title, setTitle] = useState(null);

  const [color, setColor] = useState(null);

  const [isValidTitle, setIsValidTitle] = useState(true);

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onColorChange(event) {
    setColor(event.currentTarget.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    if (title === null) {
      setIsValidTitle(false);
      return null;
    }
    onAddNewTodo(title, color);
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
        <input
          className="color-picker"
          type="color"
          value={color}
          onChange={onColorChange}
        />
        <button className="submit-button" type="submit" onClick={onFormSubmit}>
          Add New Task
        </button>
        {!isValidTitle ? (
          <div className="error-div"> Enter a Valid Task Title </div>
        ) : null}
      </form>
    </div>
  );
}

export default AddTodoModal;
