import React, { useEffect } from "react";
function Propseffect(props){
useEffect(()=>{
    alert("count is "+ props.count)
},[props.count])
return(
    <div>
        <h1>countprops:{props.count}</h1>
        <h1>dataprops:{props.data}</h1>
    </div>
)
}
export default Propseffect;