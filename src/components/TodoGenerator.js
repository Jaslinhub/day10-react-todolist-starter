import {useState} from "react";
import './TodoGenerator.css'
import {addTodo} from "../apis/api";

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
         <input
             className="newtodo-input"
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
         />
            <button className="add-btn" onClick={handleSubmit}>
                add
            </button>
    </div>;
}