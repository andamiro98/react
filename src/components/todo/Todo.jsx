import React from "react";
import "./todo.css";


const Todo = function({todo,Remove,onChange}){


    return(
    <div className="list-contain">
        <div className="list-wrapper" key={todo.id}>
            <div className="todo-container">
                <div>
                    <h2>π {todo.title}</h2>
                    <div>{todo.content}</div>
                </div>

                <div className="button-set">
                    
                    <button className="todo-delete-button" 
                            onClick={() => Remove(todo.id)}>
                            μ­μ νκΈ°
                    </button>

                    <button className="todo-complete-button"
                            onClick={() => {
                                todo.isDone = !todo.isDone 
                                onChange(todo)}}>
                                {todo.isDone ? "μ·¨μ" : "μλ£"}
                    </button>
                </div>

            </div>
        </div>
        

    </div>
    );

};
export default Todo;