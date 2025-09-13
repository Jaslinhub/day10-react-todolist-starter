import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import './TodoList.css'

const TodoList = () => {
  const {state, dispatch} = useContext(TodoContext);

    function toggleDone(id) {
        dispatch({type: 'DONE', id: id});
    }

    return (
      <div className="todo-group">

      <div>This is the TodoList Component.</div>
        {
          state.map(({id,text,done}) => {
            return (
                <div className="todo-row" key={id}>
                  <div className={`todo-item ${done?'done':''}`}>
                    <span>{text}</span>
                  </div>
                  <button className="close-btn" onClick={() => toggleDone(id)}>x</button>

                </div>
            )
          }

          )
        }
      </div>
  );
}

export default TodoList