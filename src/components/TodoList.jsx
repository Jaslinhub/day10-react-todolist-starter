import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import TodoGroup from "./TodoGroup";
import './TodoList.css'

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);

  function removeTodo(id) {
    dispatch({type: 'REMOVE', id});
  }

  return (
    <TodoGroup todos={state} onClose={removeTodo} />
  );
}

export default TodoList;
