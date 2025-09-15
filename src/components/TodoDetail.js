import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";

export function TodoDetail() {
    const {key} = useParams();
    const {state} = useContext(TodoContext);
    const todo = state.find(item => String(item.id) === String(key));
    if (!todo) {
        return <h1>Can't find（ID: {key}）</h1>;
    }
    return (
        <div style={{padding: '24px'}}>
            <h1>To do detail</h1>
            <p><b>ID:</b> {todo.id}</p>
            <p><b>Content:</b> {todo.text}</p>
            <p><b>Status:</b> {todo.done ? '已完成' : '未完成'}</p>
        </div>
    );
}