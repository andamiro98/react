import React, { useRef } from "react";
import Form from "../form/Form";
import List from "../list/List";
import { useState } from "react";
import "./layout.css"

const Layout = function() {

    const [todos, setToDos] = useState([
        {id: 1, title: "React 공부하기", content: "React 1강 학습", isDone: true},
        {id: 2, title: "React 공부하기", content: "React 2강 학습", isDone: true},
        {id: 3, title: "React 공부하기", content: "React 3강 학습", isDone: false},

    ]); 

    //추가하기
    const NewId = useRef(4); //id할당
    const onSubmitHandler = (title, content) => {
            const todo = {
            id: NewId.current,
            title,
            content,
            isDone: false,
        };
        setToDos(todos.concat(todo)); //concat(): 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열 반환
        NewId.current++;
        };
    

    // todo.id 가 매개변수로 작성하지 않는 데이터들만 추출해서 새로운 배열을 만든다
    // todo.id 가 id 인 것을 제거함
    const Remove = (id) => {
        setToDos((todos) => todos.filter((todo) => todo.id !== id));
    };

    // todo.id 가 매개변수로 작성하지 않는 데이터들만 추출해서 새로운 배열을 만든다
    // todo배열에서 todo.id파라미터로 일치하지 않는 원소만 추출해서 새로운 배열로 만든다.
    // todo.id 가 id 인 것을 바꿈
    const onChangeHandler = (id) => {
        setToDos((todos) => todos.filter((todo) => todo.id !== id));
        
    };

    return(
        <div>
            <Form 
            onSubmit ={onSubmitHandler}
            /> {/* Form컴포넌트에 onSubmit을 props */}

            <List 
            todos ={todos}
            Remove ={Remove}
            onChange = {onChangeHandler}
            />

            
        </div>
    );
};
export default Layout