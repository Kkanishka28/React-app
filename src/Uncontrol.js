import React,{useRef} from "react";
function Uncontrol(){
    let inputRef=useRef(null)
    let inputRef2=useRef(null)
    function submitForm(e){
        e.preventDefault()
console.log("input field 1:",inputRef.current.value )
console.log("input field 2:",inputRef2.current.value )
let input3=document.getElementById("input3").value
console.log("inputfield 3:",input3)
    }
    return(
        <div>
            <h1>Uncontrol Component</h1>
            <form onSubmit={submitForm}>
               <input ref={inputRef} type="text"/> <br/><br/>
               <input ref={inputRef2}type="text"/> <br/><br/>
               <input id="input3" type="text"/>
               <button>Submit</button>
               
            </form>
        </div>
    )
        
  
}
export default Uncontrol;