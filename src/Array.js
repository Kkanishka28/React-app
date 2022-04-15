import {Table} from 'react-bootstrap'
function Array(){
    const students=[
        {name:"kansh", email:"kan@gmail.com", contact:123 },
        {name:"ansh", email:"an@gmail.com", contact:234 },
        {name:"nsh", email:"n@gmail.com", contact:435 },
        {name:"sh", email:"sh@gmail.com", contact:341 }
    ]

    return(
        <div>
            <h1>Handle Array list </h1>
            <Table striped variant='dark'>
                <tbody>
                    <tr>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Contact</td>
                    </tr>
                    {
                        students.map((data,i)=>
                
                    
                    <tr key={i}>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td>{data.contact}</td>
                    </tr>
                        )}

                </tbody>
            </Table>
        </div>
    )
}
export default Array;