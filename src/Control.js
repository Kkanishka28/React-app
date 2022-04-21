import React,{useState} from 'react'
function Control(){
let[val,setVal]=useState(" ")
return(
    <div>
        <h1>Control Component</h1>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)}/>
    </div>
)
}
export default Control;