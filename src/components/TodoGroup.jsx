import React, {useEffect} from "react";
import TodoItem from "./TodoItem";
import {getTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";
import {TodoGenerator} from "./TodoGenerator";
import {Card, List} from "antd";

const TodoGroup = ({todos, onClose}) => {
    const {state, dispatch} = React.useContext(TodoContext);
    useEffect(() => {
        getTodos().then((response) => {
            console.log(response.data);
            dispatch({type: 'LOAD_TODOS', todos: response.data})
        });
    }, []);
    return (
        <div className="todo-group">
            <div>This is the TodoList Component.</div>
            {state.map(todo => (
                <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                    onClose={onClose}
                />

            ))}

            <TodoGenerator dispatch={dispatch} length={state.length}/>
        </div>
    );
};

export default TodoGroup;

