// State in functional component
import {useState} from 'react'
function State(){
// const[data,setData]= useState(0)
// or
const[data,setData]= useState('kannu')
function updateData(){
    // setData(data+1)
    // or
    setData("kanishka")
}
return(<div className="state">
    <h1>{data}</h1>
    <button onClick={updateData}>click me</button>
</div>
)
}
export default State;