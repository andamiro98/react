import React from "react";
import "./header.css";

const Header = function () { 
    return(
        
        <div>
            <div className="container">
                <h1 style ={{color: "#395B64"}}>My Todo List</h1>
                <div style ={{color: "#395B64"}}>React</div>
            </div>
            <br/>
        </div>
    );
};
export default Header;