import React,{useState} from "react";
function Hoc(){
    return(
        <div>
            <h1>HOC</h1>
           <HOCRed cmp={Counter}/>
           <HOCGreen cmp={Counter}/>
           <HOCBlue cmp={Counter}/>
        </div>
    )

}
function HOCRed(props){
    return(
        <h1 style={{backgroundColor:'red',width:"400px"}}>RED<props.cmp/></h1>
    )
}
function HOCGreen(props){
    return(
        <h1 style={{backgroundColor:'green',width:"400px"}}>green<props.cmp/></h1>
    )
}
function HOCBlue(props){
    return(
        <h1 style={{backgroundColor:'blue',width:"400px"}}>blue<props.cmp/></h1>
    )
}
function Counter(){
    let[count,setCount]=useState(0);
    return(
        <div>
            <h1>Count{count}</h1>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}
export default Hoc;