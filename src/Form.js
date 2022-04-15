import {useState} from 'react'
function Form ()
{
const[name,setName]=useState(" ");
const[movies,setMovies]=useState('');
const[tnc,setTnc]=useState(false);


    function getFormData(e){
        console.log(name,movies,tnc)
        e.preventDefault()
    }
   return( 
<div>
    <h1>Basic Form-get data</h1>
<form onSubmit={getFormData}>
        <input type='text' placeholder='name' onChange={(e)=>setName(e.target.value)}/><br></br>
        <select  onChange={(e)=>setMovies(e.target.value)}>
            <option>Select options</option>
            <option>Marvels</option>
            <option>DC</option>
            <option>Avengers</option>
        </select> <br></br>
        <input type="checkbox"  onChange={(e)=>setTnc(e.target.checked)}/><span>Accept Terms and conditions</span>
        <br/>
        <button type='submit'>Submit</button>
    </form>
    </div>
   )
}
export default Form;