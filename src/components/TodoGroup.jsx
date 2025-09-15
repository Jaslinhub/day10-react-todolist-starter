import React, {useEffect} from "react";
import TodoItem from "./TodoItem";
import {getTodos} from "../apis/api";
import {TodoContext} from "../contexts/TodoContext";

const TodoGroup = () => {
    const { state,dispatch } = React.useContext(TodoContext);
    useEffect(() => {
        getTodos().then((response) => {
            console.log(response.data);
            dispatch({type:'LOAD_TODOS', todos: response.data})
        });
    },[]);
  return (
    <div className="todo-group">
      <div>This is the TodoList Component.</div>
      {state.map(todo => (
        <TodoItem
            id={todo.id}
            text={todo.text}
            done={todo.done}
            onClose={(id) => dispatch({type: 'REMOVE', id})}
             />
      ))}
    </div>
  );
};

export default TodoGroup;

