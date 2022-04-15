// USESTATE AND USEEFFECT
import { useEffect, useState } from "react";
function Hello(){
    <h1>mai kanishkA</h1>
    return
}
function Hooks (){
    const[count,setCount]=useState(0)
useEffect(()=>{
    alert("useEffect")
    console.log("useEffect")
 
})
return(
    <div>
        <h1>Useeffect{count}</h1>
        <button onClick={()=>setCount(count+1)}>update </button>
    </div>
)
}

export default Hooks;