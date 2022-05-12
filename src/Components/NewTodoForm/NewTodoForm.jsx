import React, { useState } from "react";

import "./NewTodoForm.css";

import { ImCancelCircle } from "react-icons/im";
import { RiPlayListAddFill } from "react-icons/ri";

function AddTodoModal({ onAddNewTodo, onCancelSubmit }) {
  const [title, setTitle] = useState(null);

  // Color needs to be black as default because that is what color picker starts with
  // Otherwise we run the risk of errors because the color only registers when the color changes
  const [color, setColor] = useState("#000000");

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
        <div className="add-new-task">Add A New Task</div>
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
        {/* <IconPicker value={selectedIcon} onChange={(v) => setSelectedIcon(v)} /> */}
        <button className="submit-button" type="submit" onClick={onFormSubmit}>
          <RiPlayListAddFill style={{ color: "black", fontSize: "50px" }} />
        </button>
        {!isValidTitle ? (
          <div className="error-div"> Enter a Valid Task Title </div>
        ) : null}
        <button className="cancel-button" onClick={onCancelSubmit}>
          <ImCancelCircle style={{ color: "black", fontSize: "50px" }} />
        </button>
      </form>
    </div>
  );
}

export default AddTodoModal;
