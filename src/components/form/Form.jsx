import React, { useRef, useState } from "react";
import Header from "../header/Header";
import "./form.css";

const Form = function(props) {
    const ref = useRef();
    const [post, setPost] =useState({
        title:'',
        content:'',
    });

    
    // title과 content의 useState를 각각 만들어야 함
    // 여러개의 usestate, onchange 만들지 않기 위해 name값을 참조하자

    const {title, content} = post; //비구조화 할당
    const onChange = (event) =>{     //const onChange = (event) => setPost(event.target.value)
        const {value, name} = event.target; //value, name 추출
        setPost({
            ...post, //기존의 post객체를 복사(불변성을 위해 얕은 복사..맞나?)
            [name]: value, //name 키를 가진 값 value로 변경함
        });
    };
    const onSubmit = (event) => {
        event.preventDefault();
        

        if(title ==="" && content ===""){
            return alert("제목과 내용을 입력해주세요") 
        }
        if (title ===""){
            return alert("제목을 입력해주세요")
        }else if (content === ""){
            return alert("내용을 입력해주세요")
        }
        props.onSubmit(title, content);

        console.log("제목:",title);
        console.log("내용:",content);

        setPost({
            title:'',
            content:'',
        }); //공백으로 만들어버리기~
    };
    
    return(
        <div>
        <Header/>
        <form className="add-form" onSubmit={onSubmit}>
                <div className="input-group">
                    <label id="title">제목</label>
                    <input  type="text"
                            ref={ref}
                            name ="title" 
                            className="add-input" 
                            value={title}
                            onChange={onChange}></input>

                    <label id="infor">내용</label>
                    <input  type="text" 
                            ref={ref}
                            name ="content" 
                            className="add-input" 
                            value={content}
                            onChange={onChange}></input>
                </div>

                <button className="add-button"
                        onClick={onSubmit}>
                        추가하기
                        </button>
            </form>
            {/* form은 submit 이벤트를 갖고있음,
            그러므로 event.preventDefault() 함수를 이용하여 기본 동작을 막음 */}
        </div>

    );


};
export default Form;