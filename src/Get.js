// import  React ,{useEffect, useState} from 'react'

// function Get(){
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
//           data.map((item,i)=>
          
//           <tr key={i}>
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
// export default Get;