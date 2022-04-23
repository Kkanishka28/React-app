import logo from './logo.svg';
import './App.css';
// import  React ,{useEffect, useState} from 'react'
import Get from './Get';
import Post from './Post';
import Delete from './Delete';
// import Fill from './Fill';
import Update from './Update';
// import {User} from './User';
// import Class from './Class';
// import State from './State';
// import Statec from './Statec';
// import Student from './Student';
// import React,{useState} from 'react';
// import Input from './Input';
// import Toggle from './Toggle';
// import Form from './Form';
// import Props from './Props';
// import Render from './Render';
// import Hooks from './Hooks';
// import Effect from './Effect';
// import Array from './Array';
// import Control from './Control';
// import Uncontrol from './Uncontrol';
// import Hoc from './Hoc';
// // import Rout from './Rout';
// import React from 'react';
// import { BrowserRouter  as Router, Link,Route, Routes} from 'react-router-dom'
// import Person from './Person';

// function App() {
//   const [name,setName]=useState("kannu")

//   function getdata(){
//     return(
//       alert("welcome to props")
//     )
//   }
//   function Apple(){
// alert ("function called")
//   }
//   return (
//     <div className="App">
//      <h1>Hello</h1>

//      {/* ways of onClick */}
//      <button onClick={Apple}>Click me</button>
//      {/* <button onClick={()=>Apple()}>Click me</button> */}
//      {/* <button onClick={()=>alert("hello")}>Click me</button> */}
//      <Toggle/>
//      <User />
//     <Class/>
//     <State/>
//     <Statec/>
//     <Input/>
//     <Form/>
//     <Hooks/>
//     <Props data={getdata}/>
//     {/* <h1>Render method</h1> */}
//     <Render name={name}/>
//     <button onClick={()=>setName("kanishka")}>Update me</button>
//     <Effect/>
//     <Array/>
//     <Control/>
//     <Uncontrol/>
//     <Hoc/>

//     {/* <Rout/> */}
    
//     <Student name={name} email="kannu@test.com"  other={{address:"delhu",mobileno:"20"}}/>
//     {/* <Student name={"kanishkA"} email="kanishk@test.com" other={{address:"delhu",mobileno:"20"}}/>
//     <Student name={"SHRAY"} email="shray@test.com" other={{address:"delhu",mobileno:"20"}}/> */}
//     <button onClick={()=>setName("kanishka")}>Clickme</button>
//     </div>

//   );
  
// }

// GET METHOD
// function App(){
//   let persons=[
//     {id:1,name:"raj",email:"raj@.com"},
//     {id:2,name:"ram",email:"ram@.com"},
//     {id:3,name:"ajay",email:"ajay@.com"},
//     {id:4,name:"rishi",email:"rishi@.com"},
//     {id:5,name:"yavesh",email:"yavesh@.com"},
//     {id:6,name:"tarun",email:"tarun@.com"},
//   ]
//   return(
//     <div>
//       <Router>
//       <h1>React Dynamic Routing</h1>
//       {
//         persons.map((item)=>
//         <div><Link to={'/person/'+item.id}><h3>{item.name}</h3></Link></div>)
//       }
//       <Routes>
//       <Route exact path="/person/:id" element={<Person/>}/>
//       </Routes>
//       </Router>
//     </div>
//   )
// }
 
// POST METHOD
// function App(){
//   const[data,setData]=useState([])
//   useEffect(()=>{
//     fetch('http://localhost:3000/Users').then((result)=>{result.json().then((resp)=>{
//       console.log("result",resp)
//       setData(resp)
//     })
//   })
//   },[])
//   console.log(data)
//   return(
//     <div>
//       <h1>Get Api</h1>
//       <table border="2">
//         <tbody>
//         <tr>
//           <td>ID</td>
//           <td>Name</td>
//           <td>Email</td>
//           <td>Salary</td>

//         </tr>
    
//         {
//           data.map((item)=>
          
//           <tr>
//             <td>{item.id}</td>
//             <td>{item.fullName}</td>
//             <td>{item.email}</td>
//             <td>{item.salary}</td>
//           </tr>)
//         }
//             </tbody>
//       </table>
//     </div>
//   )
// }

// function App(){
//   const[name,setName]=useState("")
//   const[email,setEmail]=useState("")
//   const[salary,setSalary]=useState("")
//   function addUser(){
// console.log({name,email,salary})
// let data={name,email,salary}
// fetch("http://localhost:3000/Users",{
//   method:"POST",
//   headers:{
//     'Accept':'application/json',
//     'Content-type':'application/json',
//   },
//   body:JSON.stringify(data)
// }).then((result)=>{result.json().then((resp)=>{
//   console.log("resp",resp)
// })})
//   }
//   return(
//     <div>
//       <h1>Post Method</h1>
// <input type="text" value={name} onChange={(e)=>setName(e.target.value)} name='fullName'/><br /> <br />
// <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} name='email'/><br /> <br />
// <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} name='salary'/><br /> <br />
// <button onClick={addUser}>Button</button>
//     </div>
//   )
// }
function App(){
  return(
    <div>
    {/* <Get/> */}
    <Post/>
    {/* <Delete/> */}
    {/* <Fill/> */}
    <Update/>
    </div>
  )
}
export default App;
