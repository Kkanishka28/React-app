import { } from 'react-router-dom'
function Person(props){
    console.log(props.match.params.id)
    return(
        <div>
            <h1>user component</h1>
        </div>
    )
}
export default Person;