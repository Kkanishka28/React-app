import React from 'react'
function Toggle(){
    const[status,setStatus]=React.useState(true)
    return(
        <div>
            {
            status?
            <h1>hello toggle</h1>
            :null
            }
            {/* <button onClick={()=>setStatus(false)}>hide</button>
            <button onClick={()=>setStatus(true)}>show</button> */}
            <button onClick={()=>setStatus(!status)}>toggle</button>
           

        </div>
    )
}
export default Toggle;