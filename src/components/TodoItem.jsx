import React, {useContext, useState} from "react";
import './TodoList.css';
import {TodoContext} from "../contexts/TodoContext";
import {deleteTodo, editTodo, updateTodo} from "../apis/api";
import {Button, Input, Modal} from "antd";
import {CloseCircleOutlined, CloseOutlined, EditOutlined} from "@ant-design/icons";

const TodoItem = ({id, text, done, onClose}) => {
    const {dispatch} = useContext(TodoContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editText, setEditText] = useState(text);
    const toggleDone = async () => {
        const response = await updateTodo(id, !done);
        dispatch({type: 'DONE', id: response.data.id});
    };

    const onEdit = async() => {
        const response = await editTodo(id, editText);
        dispatch({type: 'EDIT', id: response.data.id, text: response.data.text});
        setIsModalOpen(false);
    }

    function showEditModal() {
        setEditText(text);
        setIsModalOpen(true);
    }
    const removeTodo=async (id) =>{
        const response=await deleteTodo(id);
        dispatch({type: 'REMOVE', id: id});
    }

    function handleCancel() {
        setIsModalOpen(false);
    }

    return (
        <div className="todo-row" key={id}>
            <div className={`todo-item ${done ? 'done' : ''}`} onClick={toggleDone}>
                <span>{text}</span>
            </div>
            <Button type="default" shape="default" onClick={showEditModal}>
                <EditOutlined/>
            </Button>
            <Button type="default" shape="default" onClick={() => removeTodo(id)}>
                <CloseOutlined/>
            </Button>
            <Modal
                title="Edit to do item"
                open={isModalOpen}
                onOk={onEdit}
                onCancel={handleCancel}
            >
                <Input
                    value={editText}
                    onChange={e => setEditText(e.target.value)}
                />
            </Modal>
        </div>
    );
};

export default TodoItem;