import React, { useContext } from "react";
import './TodoList.css';
import { TodoContext } from "../contexts/TodoContext";
import {updateTodo} from "../apis/api";

const TodoItem = ({ id, text, done, onClose }) => {
    const { dispatch } = useContext(TodoContext);

    const toggleDone = async() => {
        const response = await updateTodo(id,!done);
        dispatch({ type: 'DONE', id:response.data.id  });
    };

    return (
        <div className="todo-row" key={id}>
            <div className={`todo-item ${done ? 'done' : ''}`} onClick={toggleDone}>
                <span>{text}</span>
            </div>
            <button className="close-btn" onClick={() => onClose(id)}>x</button>
        </div>
    );
};

export default TodoItem;