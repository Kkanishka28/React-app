// import  React ,{useEffect, useState} from 'react'

// function Fill(){
//   const[data,setData]=useState([])
//   const [fullName,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [salary,setSalary]=useState('');
//   useEffect(()=>{
//   getList()
//   },[])
//   function getList(){
//     fetch('http://localhost:3000/Users').then((result)=>{result.json().then((resp)=>{
//         console.log("result",resp)
//         setData(resp)
//         setName(resp[0].fullName)
//         setEmail(resp[0].email)
//         setSalary(resp[0].salary)
//       })
//     })
//   }
//   function selectUser(id){
//       console.log(data[id-1])
//       let item=data[id-1]
//       setName(item.fullName)
//       setEmail(item.email)
//       setSalary(item.salary)

//   }
//   function deleteUser(id){
    
//       fetch(`http://localhost:3000/Users/${id}`,{
//           method:'DELETE'
//       }).then((result)=>{
// result.json().then((resp)=>{
//     console.log(resp)
//     getList()
// })
//       })
//   }
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
//           data.map((item,i)=>
          
//           <tr key={i}>
//             <td>{item.id}</td>
//             <td>{item.fullName}</td>
//             <td>{item.email}</td>
//             <td>{item.salary}</td>
//             <td><button onClick={()=>deleteUser(item.id)}>Delete</button></td>
//             <td><button onClick={()=>selectUser(item.id)}>Update</button></td>
//           </tr>)
//         }
//             </tbody>
//       </table>
//       <div>
//         <h1>FORM</h1>
//           <input type="text" value={fullName}/><br/><br/>
//           <input type="text" value={email}/><br/><br/>
//           <input type="text" value={salary}/><br/><br/>
          
//       </div>
//     </div>
//   )
// }
// export default Fill;