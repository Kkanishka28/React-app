import logo from './logo.svg';
import './App.css';
import {User} from './User';
import Class from './Class';
import State from './State';
import Statec from './Statec';
import Student from './Student';
import React,{useState} from 'react';
import Input from './Input';
import Toggle from './Toggle';
import Form from './Form';
import Props from './Props';
import Render from './Render';
import Hooks from './Hooks';
import Effect from './Effect';
import Array from './Array';

function App() {
  const [name,setName]=useState("kannu")

  function getdata(){
    return(
      alert("welcome to props")
    )
  }
  function Apple(){
alert ("function called")
  }
  return (
    <div className="App">
     <h1>Hello</h1>

     {/* ways of onClick */}
     <button onClick={Apple}>Click me</button>
     {/* <button onClick={()=>Apple()}>Click me</button> */}
     {/* <button onClick={()=>alert("hello")}>Click me</button> */}
     <Toggle/>
     <User />
    <Class/>
    <State/>
    <Statec/>
    <Input/>
    <Form/>
    <Hooks/>
    <Props data={getdata}/>
    {/* <h1>Render method</h1> */}
    <Render name={name}/>
    <button onClick={()=>setName("kanishka")}>Update me</button>
    <Effect/>
    <Array/>
    <Student name={name} email="kannu@test.com"  other={{address:"delhu",mobileno:"20"}}/>
    {/* <Student name={"kanishkA"} email="kanishk@test.com" other={{address:"delhu",mobileno:"20"}}/>
    <Student name={"SHRAY"} email="shray@test.com" other={{address:"delhu",mobileno:"20"}}/> */}
    <button onClick={()=>setName("kanishka")}>Clickme</button>
    </div>

  );
  
}

export default App;
