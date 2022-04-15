import React from "react";
import Child from "./Child";
function Props(props){
    // function getAdd(){
    //     alert("superchild call")
    // }
    return(<div>
        <h1>Props componenet</h1>
        <button onClick={props.data}>click me</button>
        {/* <Child put={getAdd}/> */}
        </div>
        
    )
    
}
export default Props;