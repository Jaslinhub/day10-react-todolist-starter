import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import TodoGroup from "./TodoGroup";
import './TodoList.css'
import {deleteTodo} from "../apis/api";

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);

  const removeTodo=async (id) =>{
    const response=await deleteTodo(id);
    dispatch({type: 'REMOVE', id: response.data.id});
  }

  return (
    <TodoGroup  todos={state} onClose={removeTodo} />
  );
}

export default TodoList;
