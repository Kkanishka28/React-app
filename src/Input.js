import React,{useState} from "react";
function Input(){
const[data,setData]=useState(null)
const[print,setPrint]=useState(false)
 function getData(val){
     console.log(val.target.value);
     setData(val.target.value);
     setPrint(false)
 }
    return(
        <div>
            {/* <h1>{data}</h1> */}
            <div>
                {print?
                <h1>{data}</h1>
            :null}
            </div>
            <input type="text" onChange={getData}/>
            <button onClick={()=>setPrint(true)} >Print me</button>
        </div>
    )
}
export default Input;