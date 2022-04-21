import  React ,{useEffect, useState} from 'react'

function Post(){
      const[fullName,setName]=useState("")
      const[email,setEmail]=useState("")
      const[salary,setSalary]=useState("")
      function addUser(){
    console.log({fullName,email,salary})
    let data={fullName,email,salary}
    fetch("http://localhost:3000/Users",{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
      },
      body:JSON.stringify(data)
    }).then((result)=>{result.json().then((resp)=>{
      console.log("resp",resp)
    })})
      }
      return(
        <div>
          <h1>Post Method</h1>
    <input type="text" value={fullName} onChange={(e)=>setName(e.target.value)} name='fullName'/><br /> <br />
    <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/><br /> <br />
    <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} name='salary'/><br /> <br />
    <button onClick={addUser}>Button</button>
        </div>
      )
    }
    export default Post;