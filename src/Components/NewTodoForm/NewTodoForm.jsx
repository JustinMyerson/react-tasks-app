import React, { useState } from "react";

import "./NewTodoForm.css";

function AddTodoModal({ onAddNewTodo }) {
  const [title, setTitle] = useState(0);

  function onTitleChange(event) {
    setTitle(event.currentTarget.value);
  }

  function onFormSubmit(event) {
    event.preventDefault();
    onAddNewTodo(title);
  }

  return (
    <div className="new-form-div">
      <form>
        <input type="text" value={title} onChange={onTitleChange} />
        <button type="submit" onClick={onFormSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddTodoModal;
