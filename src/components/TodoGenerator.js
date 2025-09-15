import {useState} from "react";
import './TodoGenerator.css'
import {addTodo} from "../apis/api";
import {Button, Input,Space} from "antd";

export function TodoGenerator({dispatch, length}) {
    const [text, setText] = useState("");
    function onAddTodo() {
        if(text.trim().length===0){
            return;
        }
        dispatch({
            type: 'ADD',
            todo:{
                id: length + 1,
                text,
                done: false,
            }
        });
        setText("");
    }
    const handleSubmit =async ()=>{
        if(text && text.trim()){
            const newTodo={
                done:false,
                text:text.trim()
            }
            const response=await addTodo(newTodo)
            dispatch({type:'ADD',todo:response.data})
        }
    }

    return <div>
    {/*     <Input
             className="newtodo-input"
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
         />
            <button className="add-btn" onClick={handleSubmit}>
                add
            </button>
        <Button type="primary" onClick={handleSubmit}>add</Button>*/}

        <Space.Compact style={{ width: '100%' }}>
            <Input type="text"
                   value={text}
                   onChange={(e) => setText(e.target.value)} />
            <Button type="primary" onClick={handleSubmit}>add</Button>
        </Space.Compact>
    </div>;
}