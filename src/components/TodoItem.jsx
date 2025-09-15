import React from "react";
import './TodoList.css';

const TodoItem = ({ id, text, done, onClose }) => {
  return (
    <div className="todo-row" key={id}>
      <div className={`todo-item ${done ? 'done' : ''}`}>
        <span>{text}</span>
      </div>
      <button className="close-btn" onClick={() => onClose(id)}>x</button>
    </div>
  );
};

export default TodoItem;

