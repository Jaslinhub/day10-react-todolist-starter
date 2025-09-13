import {useState} from "react";

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

    return <div>
         <input
             type="text"
             value={text}
             onChange={(e) => setText(e.target.value)}
         />
            <button onClick={onAddTodo}>
                add
            </button>
    </div>;
}