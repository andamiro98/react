import React from "react";
import Todo from "../todo/Todo";
import "./list.css";


const List = function({todos,Remove,onChange}){
    
    return(
        <div className="list-contain">
            <div>
                <div>
                    <h2 style ={{color: "#395B64"}}>
                    My List 🔥
                    </h2>
                    <div className="list-wrapper">
                    {todos.map((todo) =>{
                        if(todo.isDone === false){ //isDone === false
                            return <Todo
                            title = "Working"  
                            todo = {todo}
                            key = {todo.id}
                            Remove = {Remove}
                            onChange ={onChange} />
                        }else {
                            return null
                        }
                    })}
                    </div>
                </div>
                
                <div>
                    <h2 style ={{color: "#395B64"}} >
                    Complete  🎉
                    </h2>
                    <div className="list-wrapper">
                    {todos.map((todo) =>{
                        if(todo.isDone === true){ //isDone === true
                            return <Todo
                            title = "Done"  
                            todo = {todo}
                            key = {todo.id}
                            Remove = {Remove}
                            onChange ={onChange} />
                        }else {
                            return null
                        }
                    })}
                    </div>
                </div>
                
            </div>
        </div>


    );

};
export default List;