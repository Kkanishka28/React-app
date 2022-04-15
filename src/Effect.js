import {useEffect, useState} from "react";
import Propseffect from "./Propseffect";
function Effect(){
const[data,setData]=useState(10)
const[count,setCount]=useState(100)
    // useEffect(()=>{
    //     alert("data is called")
    //     console.log("useeffect called")
    // },[data])
    return(
<div>

  <Propseffect  data={data} count={count}/>
  

<button onClick={()=>setCount(count+1)}>update count</button>
<button onClick={()=>setData(data+1)}>update data</button>
</div>
    )
}
export default Effect;