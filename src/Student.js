function Student (props){
    return(
        <div style={{backgroundColor:"pink",margin:10}}>
        <h1>Hello {props.name}</h1>
        <h3>Email:{props.email}</h3>
        <h5>address:{props.other.address}</h5>
        </div>
    )
}
export default Student;